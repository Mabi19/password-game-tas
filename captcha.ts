import { nextTick } from "./delay";
import { digitSum } from "./digits";

export async function sniffCaptcha() {
    // reroll until the captcha has a small sum
    let rerolls = 0;
    const captchaImage: HTMLImageElement = document.querySelector(".captcha-img");
    const captchaButton: HTMLImageElement = document.querySelector(".captcha-refresh")
    let captcha: string;
    while (rerolls < 128) {
        captcha = captchaImage.src.match(/\/([a-z0-9]+)\.png$/)[1];
        if (digitSum(captcha) < 4) {
            break;
        }
        captchaButton.click();
        rerolls++;
        await nextTick();
    }

    return { captcha, rerolls };
}
