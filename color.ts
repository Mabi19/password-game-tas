import { nextTick, waitForElement } from "./delay";
import { digitSum } from "./digits";

export async function sniffColor() {
    // reroll until the captcha has no numbers
    const { element: colorSwatch, loadTicks: colorLoadTicks } = await waitForElement(".rand-color");
    console.log(`color took ${colorLoadTicks} ticks to load`);

    const refreshButton: HTMLElement = document.querySelector(".rand-color .refresh");

    let hexColor: string;
    let rerolls = 0;
    while (rerolls < 128) {
        const rgbColor = colorSwatch.style.backgroundColor;
        const [_full, r, g, b] = rgbColor.match(/rgb\((\d+), (\d+), (\d+)\)/);
        hexColor = parseInt(r).toString(16).padStart(2, "0") +
            parseInt(g).toString(16).padStart(2, "0") +
            parseInt(b).toString(16).padStart(2, "0");

        if (digitSum(hexColor) < 5) {
            break;
        }
        refreshButton.click();
        rerolls++;
        await nextTick();
    }

    return { hexColor: `#${hexColor}`, rerolls };
}
