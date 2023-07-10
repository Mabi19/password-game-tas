import { nextTick } from "./delay";
import { PasswordBuilder } from "./password";

const sacrificeCandidates: string[] = [];
// we can sacrifice everything after F, since the only rule
// where letters need to be inserted after the sacrifice is the color hex code
for (let letter = "G".charCodeAt(0); letter <= "Z".charCodeAt(0); letter++) {
    sacrificeCandidates.push(String.fromCharCode(letter));
}

export async function pickSacrificeLetters(builder: PasswordBuilder) {
    const password = builder.currentPassword().toUpperCase();
    const toSacrifice = sacrificeCandidates
        .filter((letter) => !password.includes(letter))
        .slice(0, 2);
    if (toSacrifice.length < 2) {
        throw new Error("Could not find enough letters to sacrifice");
    }

    window["_tasbot_setstatus"](`Sacrificing ${toSacrifice[0]} and ${toSacrifice[1]}`);

    const letterBox = document.querySelector(".sacrafice-area .letters");
    const letters = letterBox.children;
    for (let i = 0; i < letters.length; i++) {
        const letterButton = letters[i] as HTMLButtonElement;
        for (const sacrificeLetter of toSacrifice) {
            if (letterButton.textContent.includes(sacrificeLetter)) {
                letterButton.click();
            }
        }
    }

    // wait for the buttons to be clicked
    await nextTick();

    // again, not my typo
    const confirmButton = document.querySelector(".sacrafice-btn") as HTMLButtonElement;
    confirmButton.click();
}