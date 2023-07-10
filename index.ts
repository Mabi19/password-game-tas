import { PasswordBuilder, PasswordPart, LENGTH_TARGET, transforms } from "./password";
import { nextTick, waitForElement } from "./delay";
import { sniffCaptcha } from "./captcha";
import { sniffGeoguessr } from "./geoguessr";
import { sniffChess } from "./chess";
import { periodicTablePart } from "./periodic-table";
import { sniffYouTube } from "./youtube";
import { pickSacrificeLetters } from "./sacrifice";
import { digitsPart } from "./digits";
import { sniffColor } from "./color";

// spoof Date to always return 2023-07-10 1:00:00 in the local timezone
const oldDate = window.Date;
window.Date = new Proxy(oldDate, {
    construct(target, _argArray, _newTarget) {
        return new target(2023, 6, 10, 1, 0, 0);
    },
});

window.onload = () => {
    let editBox: HTMLElement = document.querySelector(".ProseMirror");
    let startTime: number | undefined = undefined;

    async function play() {
        console.log("playing");

        editBox.focus();

        setStatus("Inputting static part, numbers and elements")
        const builder = new PasswordBuilder(editBox);
        builder.parts.paul = new PasswordPart("🥚🐛🐛🐛");
        builder.parts.base = new PasswordPart(`may🌑iamloved0shell🏋️‍♂️🏋️‍♂️🏋️‍♂️folly!${LENGTH_TARGET}@1:00`);
        builder.parts.romanNumerals = new PasswordPart("XXXV");
        // this reacts to chess and YT
        builder.parts.elements = periodicTablePart;
        builder.parts.digits = digitsPart;
        builder.build();

        await nextTick();

        // solve the captcha
        setStatus("Rerolling CAPTCHA for good digits");
        const { captcha, rerolls } = await sniffCaptcha();
        console.log(`captcha: ${captcha} (rerolls: ${rerolls})`);
        // create the part
        builder.parts.captcha = new PasswordPart(`,${captcha}`);
        builder.build();

        await nextTick();

        // solve geoguessr
        setStatus("Extracting country from Google Maps embed");
        const { country, loadTicks } = await sniffGeoguessr();
        console.log(`country: ${country} (load ticks: ${loadTicks})`);
        builder.parts.geoguessr = new PasswordPart(`.${country}`);
        builder.build();

        await nextTick();

        // solve chess
        setStatus("Solving chess puzzle");
        const chessMove = sniffChess();
        console.log(`best move: ${chessMove}`);
        builder.parts.chess = new PasswordPart(chessMove);
        builder.build();

        await nextTick();

        // enable vowel bolding
        setStatus("Bolding vowels");
        builder.transforms |= transforms.BOLD_VOWELS;
        builder.build();
        console.log("bolded vowels");

        // wait for the fire to appear
        await nextTick();
        // replace the password to extinguish it
        setStatus("Extinguishing fire");
        // NOTE: we're replacing Paul with an egg here, but he doesn't seem to mind
        builder.build();
        console.log("extinguished fire");

        await nextTick();

        // solve YT
        setStatus("Finding YouTube video");
        const youtubeVideo = sniffYouTube();
        console.log(`YouTube URL: ${youtubeVideo}`);
        builder.parts.youtube = new PasswordPart(youtubeVideo);
        builder.build();

        // wait for YT to load
        setStatus("Waiting for YouTube to load");
        const { loadTicks: ytLoadTicks } = await waitForElement(".sacrafice-area");
        console.log(`YT took ${ytLoadTicks} ticks to load`);

        // pick the letters to sacrifice
        // status is set inside
        await pickSacrificeLetters(builder);

        // wait for the italic rule to appear
        // (the sacrifice animation takes some time)
        setStatus("Waiting for italics to be made available");
        await waitForElement(".toolbar button:nth-child(2)");

        await nextTick();

        // italic periods
        setStatus("Adding italic filler");
        builder.transforms |= transforms.ITALIC_FILLER;
        builder.build();
        console.log("added italic filler");

        // wait for font picker to appear
        setStatus("Waiting for fonts to be made available");
        await waitForElement(".toolbar select:nth-child(3)");

        await nextTick();

        // make the filler wingdings
        setStatus("Making the filler Wingdings");
        builder.transforms |= transforms.WINGDINGS_FILLER;
        builder.build();
        console.log("made the filler wingdings");

        await nextTick();

        // solve hex color
        setStatus("Reading color");
        const { hexColor, rerolls: colorRerolls } = await sniffColor();
        console.log(`color: ${hexColor} (rerolls: ${colorRerolls})`);
        builder.parts.color = new PasswordPart(hexColor);
        builder.build();

        // TODO: sometimes the editor doesn't notice the hex color immediately; poke it

        await nextTick();

        // make roman numerals times new roman
        setStatus("Making Roman numerals Times New Roman");
        builder.transforms |= transforms.TIMES_NEW_ROMAN_NUMERALS;
        builder.build();
        console.log("set roman numerals to times new roman")

        await nextTick();

        // square digit sizes
        setStatus("Setting digit sizes to their squares");
        builder.transforms |= transforms.SQUARE_DIGIT_SIZES;
        builder.build();
        console.log("squared digit sizes");

        await nextTick();

        // unique letter sizes
        setStatus("Uniquifying letter sizes");
        builder.transforms |= transforms.UNIQUE_LETTER_SIZES;
        builder.build();
        console.log("made letter sizes unique");

        // TODO: click the yes button, fill in the second box
        setStatus("Waiting for confirm button to appear");
        const { element: confirmButton, loadTicks: confirmLoadTicks } = await waitForElement(".final-password button:nth-child(1)");
        console.log(`confirm button took ${confirmLoadTicks} ticks to load`);
        confirmButton.click();

        // second input field
        setStatus("Waiting for repeat input field to appear");
        const { element: repeatEditBox, loadTicks: repeatLoadTicks } = await waitForElement(".password-box:nth-child(2) .ProseMirror");
        console.log(`repeat input field took ${repeatLoadTicks} ticks to load`);
        // get the first edit box just in case
        const baseEditBoxContent = document.querySelector(".password-box:nth-child(1) .ProseMirror p")

        // copy directly in case Paul ate a bug
        repeatEditBox.innerHTML = baseEditBoxContent.innerHTML;

        setStatus("Done");
        await nextTick();
    }

    function startTimer() {
        startTime = performance.now();
        updateTimer();
    }

    function updateTimer() {
        if (startTime != undefined) {
            const time = performance.now() - startTime;
            const ms = time % 1000;
            const sec = ((time - ms) / 1000) % 60;
            const min = Math.floor(time / 60000);
            timer.textContent = `${min}m ${sec.toString().padStart(2, "0")}s ${ms.toString().padStart(3, "0")}ms`;

            requestAnimationFrame(() => updateTimer());
        }
    }

    function endTimer() {
        const time = performance.now() - startTime;
        updateTimer();
        startTime = undefined;
        return time;
    }

    function setStatus(newStatus: string) {
        status.textContent = newStatus;
    }

    async function start() {
        startTimer();
        try {
            await play();
        } catch (error) {
            console.error(error);
            setStatus("Error! See console for details");
        }
        const time = endTimer();
        console.log(`done in ${time}ms`);
    }

    // toolbar
    const toolbar = document.createElement("div");
    toolbar.style.display = "flex";
    toolbar.style.flexFlow = "row-wrap";
    toolbar.style.alignItems = "center";
    toolbar.style.gap = "8px";
    toolbar.style.padding = "8px";
    toolbar.style.fontSize = "20px";

    toolbar.style.width = "100%";
    toolbar.style.position = "fixed";
    toolbar.style.bottom = "0";

    let shiftHeld = false;
    function updateShiftStatus(ev: KeyboardEvent) {
        shiftHeld = ev.shiftKey;
        startButton.textContent = shiftHeld
            ? "Start (without reloading)"
            : "Start";
    }
    window.addEventListener("keydown", updateShiftStatus);
    window.addEventListener("keyup", updateShiftStatus);

    const startButton = document.createElement("button");
    startButton.addEventListener("click", async () => {
        if (shiftHeld) {
            start();
        } else {
            window.sessionStorage.setItem("autostart", "1");
            window.location.reload();
        }
    });
    startButton.style.backgroundColor = "whitesmoke";
    startButton.style.border = "2px solid black";
    startButton.style.borderRadius = "8px";
    startButton.style.padding = "8px";
    startButton.style.font = "inherit";
    startButton.style.cursor = "pointer";
    startButton.textContent = "Start";

    const timer = document.createElement("div");
    timer.style.padding = "4px";
    timer.style.borderRadius = "2px";
    timer.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    timer.style.color = "whitesmoke";
    timer.textContent = "0m 00s 000ms";

    const spacer = document.createElement("div");
    spacer.style.flexGrow = "1";

    const status = document.createElement("div");
    status.textContent = "";

    // make it available to other parts of the logic
    window["_tasbot_setstatus"] = setStatus;

    toolbar.append(startButton, timer, spacer, status);
    document.body.appendChild(toolbar);

    // autostart
    if (sessionStorage.getItem("autostart") != null) {
        start();
    }
}
