import GraphemeSplitter from "grapheme-splitter";

const splitter = new GraphemeSplitter();

export const enum PasswordPartType {
    STATIC,
    DYNAMIC,
}

export class PasswordPart {
    content: string | ((builder: PasswordBuilder) => string);
    font: string | undefined;

    constructor(content: string | ((builder: PasswordBuilder) => string), font?: string) {
        this.content = content;
        this.font = font;
    }

    type() {
        return (typeof this.content == "function") ? PasswordPartType.DYNAMIC : PasswordPartType.STATIC;
    }
}

// the digit sum of this is not high enough to always work,
// but I want to fit the password boxes on one screen
export const LENGTH_TARGET = 151;

export const transforms = {
    BOLD_VOWELS: 1,
    ITALIC_FILLER: 2,
    WINGDINGS_FILLER: 4,
    TIMES_NEW_ROMAN_NUMERALS: 8,
    SQUARE_DIGIT_SIZES: 16,
    UNIQUE_LETTER_SIZES: 32,
}

const formatting = {
    BOLD: 1,
    TIMES_NEW_ROMAN: 2,
}

const formatTags = {
    [formatting.BOLD]: {
        pre: "<strong>",
        post: "</strong>",
    },
    [formatting.TIMES_NEW_ROMAN]: {
        css: "font-family: 'Times New Roman'",
    },
}

const fontSizes = [0, 1, 4, 9, 12, 16, 25, 28, 32, 36, 42, 49, 64, 81];

export class PasswordBuilder {
    parts: Record<string, PasswordPart>;
    // bitfield
    transforms: number;
    private editBox: HTMLElement;
    private lastPassword: string;

    constructor(editBox: HTMLElement) {
        this.parts = {};
        this.transforms = 0;
        this.editBox = editBox;
    }

    build() {
        const password = Object.values(this.parts)
            .map((part) => part.content)
            .map((content) => typeof content == "function" ? content(this) : content)
            .join("");

        this.lastPassword = password;
        const transformed = this.transform(password);
        this.editBox.innerHTML = transformed;
        return transformed;
    }

    // used by sacrifice to know what letters are in there
    currentPassword() {
        return this.lastPassword;
    }

    // formatting and other styles
    transform(password: string) {
        if (this.transforms == 0) return password;

        let output = "";
        // group styles into chunks and then emit to be more efficient
        let currentChunk = "";
        let currentFormat = 0;
        let currentSize = undefined;

        const letterSizeIndices = {};

        function commitChunk() {
            let pre = "";
            let post = "";
            const css: string[] = [];

            for (const format of Object.values(formatting)) {
                if (currentFormat & format) {
                    const tags = formatTags[format];
                    if (tags.css) css.push(tags.css);
                    if (tags.pre) pre += tags.pre;
                    if (tags.post) post += tags.post;
                }
            }

            if (currentSize != undefined) {
                css.push(`font-size: ${currentSize}px`);
            }

            if (css.length > 0) {
                pre = `<span style="${css.join('; ')}">${pre}`;
                post = `${post}</span>`;
            }

            return `${pre}${currentChunk}${post}`;
        }

        for (const char of password) {
            // format bitfield
            let thisFormat = 0;
            // size in pixels (or undefined if default)
            let thisSize = undefined;

            // bold vowels
            if (this.transforms & transforms.BOLD_VOWELS && /[aeiouy]/i.test(char)) {
                thisFormat |= formatting.BOLD;
            }
            // times new roman numerals
            if (this.transforms & transforms.TIMES_NEW_ROMAN_NUMERALS && /[IVXLCDM]/.test(char)) {
                thisFormat |= formatting.TIMES_NEW_ROMAN;
            }
            // square digit sizes
            if (this.transforms & transforms.SQUARE_DIGIT_SIZES && /[0-9]/.test(char)) {
                thisSize = parseInt(char) ** 2;
            }
            // unique letter sizes
            if (this.transforms & transforms.UNIQUE_LETTER_SIZES && /[a-z]/i.test(char)) {
                const letter = char.toLowerCase();
                if (letter in letterSizeIndices) {
                    letterSizeIndices[letter]++;
                } else {
                    letterSizeIndices[letter] = 0;
                }
                const sizeIndex = letterSizeIndices[letter];
                if (sizeIndex >= fontSizes.length) {
                    throw new Error("Ran out of letter font sizes");
                }
                thisSize = fontSizes[sizeIndex];
            }

            if (currentFormat == thisFormat && currentSize == thisSize) {
                // add to the current chunk
                currentChunk += char;
            } else {
                // commit the current chunk and make a new one
                output += commitChunk();

                // new chunk
                currentChunk = char;
                currentFormat = thisFormat;
                currentSize = thisSize;
            }
        }

        // last chunk
        output += commitChunk();

        if (this.transforms & transforms.ITALIC_FILLER) {
            // use hefty javascript library to measure the length
            const graphemeCount = splitter.countGraphemes(password);
            // I'm not sure where the offset comes from
            const fillerCount = LENGTH_TARGET - graphemeCount - 1;

            let periods = `<em>${"<".repeat(fillerCount)}</em>`;

            if (this.transforms & transforms.WINGDINGS_FILLER) {
                periods = `<span style="font-family: Wingdings; font-size: 25px">${periods}</span>`;
            }

            output += `;${periods}`;
        }

        return output;
    }
}
