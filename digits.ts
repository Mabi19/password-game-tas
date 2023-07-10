import { PasswordPart, PasswordPartType } from "./password";

export function digitSum(str: string) {
    return str.split("").filter((char) => /[0-9]/.test(char)).map((char) => Number(char)).reduce((acc, val) => acc + val, 0);
}

export const digitsPart = new PasswordPart((builder) => {
    // find the digit sum
    // NOTE: for now, this only goes through the static parts
    // I'm not sure if any dynamic parts will have digits in them
    let sum = 0;

    Object.entries(builder.parts).map(([key, part]) => {
        if (key == "digits") return;
        if (part.type() == PasswordPartType.DYNAMIC) return;

        sum += digitSum(part.content as string);
    });

    if (sum > 25) {
        // uh oh
        throw new Error(`couldn't complete digit sum (rest is ${sum})`);
    }

    // put together the result
    let result = "";
    let remaining = 25 - sum;
    while (remaining > 0) {
        if (remaining > 9) {
            result += "9";
            remaining -= 9
            continue;
        };
        result += remaining.toString();
        remaining = 0;
    }
    return result;
});