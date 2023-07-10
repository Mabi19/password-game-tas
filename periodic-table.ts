import { PasswordPart } from "./password";

interface Element {
    num: number,
    symbol: string,
}

// Regular periodic table
// TODO: precompute which elements are suitable
const elements: Element[] = [
    {
        // null element to prevent off-by-one errors
        "num": 0,
        "symbol": "[Something has gone terribly wrong]"
    },
    {
        "num": 1,
        "symbol": "H"
    },
    {
        "num": 2,
        "symbol": "He"
    },
    {
        "num": 3,
        "symbol": "Li"
    },
    {
        "num": 4,
        "symbol": "Be"
    },
    {
        "num": 5,
        "symbol": "B"
    },
    {
        "num": 6,
        "symbol": "C"
    },
    {
        "num": 7,
        "symbol": "N"
    },
    {
        "num": 8,
        "symbol": "O"
    },
    {
        "num": 9,
        "symbol": "F"
    },
    {
        "num": 10,
        "symbol": "Ne"
    },
    {
        "num": 11,
        "symbol": "Na"
    },
    {
        "num": 12,
        "symbol": "Mg"
    },
    {
        "num": 13,
        "symbol": "Al"
    },
    {
        "num": 14,
        "symbol": "Si"
    },
    {
        "num": 15,
        "symbol": "P"
    },
    {
        "num": 16,
        "symbol": "S"
    },
    {
        "num": 17,
        "symbol": "Cl"
    },
    {
        "num": 18,
        "symbol": "Ar"
    },
    {
        "num": 19,
        "symbol": "K"
    },
    {
        "num": 20,
        "symbol": "Ca"
    },
    {
        "num": 21,
        "symbol": "Sc"
    },
    {
        "num": 22,
        "symbol": "Ti"
    },
    {
        "num": 23,
        "symbol": "V"
    },
    {
        "num": 24,
        "symbol": "Cr"
    },
    {
        "num": 25,
        "symbol": "Mn"
    },
    {
        "num": 26,
        "symbol": "Fe"
    },
    {
        "num": 27,
        "symbol": "Co"
    },
    {
        "num": 28,
        "symbol": "Ni"
    },
    {
        "num": 29,
        "symbol": "Cu"
    },
    {
        "num": 30,
        "symbol": "Zn"
    },
    {
        "num": 31,
        "symbol": "Ga"
    },
    {
        "num": 32,
        "symbol": "Ge"
    },
    {
        "num": 33,
        "symbol": "As"
    },
    {
        "num": 34,
        "symbol": "Se"
    },
    {
        "num": 35,
        "symbol": "Br"
    },
    {
        "num": 36,
        "symbol": "Kr"
    },
    {
        "num": 37,
        "symbol": "Rb"
    },
    {
        "num": 38,
        "symbol": "Sr"
    },
    {
        "num": 39,
        "symbol": "Y"
    },
    {
        "num": 40,
        "symbol": "Zr"
    },
    {
        "num": 41,
        "symbol": "Nb"
    },
    {
        "num": 42,
        "symbol": "Mo"
    },
    {
        "num": 43,
        "symbol": "Tc"
    },
    {
        "num": 44,
        "symbol": "Ru"
    },
    {
        "num": 45,
        "symbol": "Rh"
    },
    {
        "num": 46,
        "symbol": "Pd"
    },
    {
        "num": 47,
        "symbol": "Ag"
    },
    {
        "num": 48,
        "symbol": "Cd"
    },
    {
        "num": 49,
        "symbol": "In"
    },
    {
        "num": 50,
        "symbol": "Sn"
    },
    {
        "num": 51,
        "symbol": "Sb"
    },
    {
        "num": 52,
        "symbol": "Te"
    },
    {
        "num": 53,
        "symbol": "I"
    },
    {
        "num": 54,
        "symbol": "Xe"
    },
    {
        "num": 55,
        "symbol": "Cs"
    },
    {
        "num": 56,
        "symbol": "Ba"
    },
    {
        "num": 57,
        "symbol": "La"
    },
    {
        "num": 58,
        "symbol": "Ce"
    },
    {
        "num": 59,
        "symbol": "Pr"
    },
    {
        "num": 60,
        "symbol": "Nd"
    },
    {
        "num": 61,
        "symbol": "Pm"
    },
    {
        "num": 62,
        "symbol": "Sm"
    },
    {
        "num": 63,
        "symbol": "Eu"
    },
    {
        "num": 64,
        "symbol": "Gd"
    },
    {
        "num": 65,
        "symbol": "Tb"
    },
    {
        "num": 66,
        "symbol": "Dy"
    },
    {
        "num": 67,
        "symbol": "Ho"
    },
    {
        "num": 68,
        "symbol": "Er"
    },
    {
        "num": 69,
        "symbol": "Tm"
    },
    {
        "num": 70,
        "symbol": "Yb"
    },
    {
        "num": 71,
        "symbol": "Lu"
    },
    {
        "num": 72,
        "symbol": "Hf"
    },
    {
        "num": 73,
        "symbol": "Ta"
    },
    {
        "num": 74,
        "symbol": "W"
    },
    {
        "num": 75,
        "symbol": "Re"
    },
    {
        "num": 76,
        "symbol": "Os"
    },
    {
        "num": 77,
        "symbol": "Ir"
    },
    {
        "num": 78,
        "symbol": "Pt"
    },
    {
        "num": 79,
        "symbol": "Au"
    },
    {
        "num": 80,
        "symbol": "Hg"
    },
    {
        "num": 81,
        "symbol": "Tl"
    },
    {
        "num": 82,
        "symbol": "Pb"
    },
    {
        "num": 83,
        "symbol": "Bi"
    },
    {
        "num": 84,
        "symbol": "Po"
    },
    {
        "num": 85,
        "symbol": "At"
    },
    {
        "num": 86,
        "symbol": "Rn"
    },
    {
        "num": 87,
        "symbol": "Fr"
    },
    {
        "num": 88,
        "symbol": "Ra"
    },
    {
        "num": 89,
        "symbol": "Ac"
    },
    {
        "num": 90,
        "symbol": "Th"
    },
    {
        "num": 91,
        "symbol": "Pa"
    },
    {
        "num": 92,
        "symbol": "U"
    },
    {
        "num": 93,
        "symbol": "Np"
    },
    {
        "num": 94,
        "symbol": "Pu"
    },
    {
        "num": 95,
        "symbol": "Am"
    },
    {
        "num": 96,
        "symbol": "Cm"
    },
    {
        "num": 97,
        "symbol": "Bk"
    },
    {
        "num": 98,
        "symbol": "Cf"
    },
    {
        "num": 99,
        "symbol": "Es"
    },
    {
        "num": 100,
        "symbol": "Fm"
    },
    {
        "num": 101,
        "symbol": "Md"
    },
    {
        "num": 102,
        "symbol": "No"
    },
    {
        "num": 103,
        "symbol": "Lr"
    },
    {
        "num": 104,
        "symbol": "Rf"
    },
    {
        "num": 105,
        "symbol": "Db"
    },
    {
        "num": 106,
        "symbol": "Sg"
    },
    {
        "num": 107,
        "symbol": "Bh"
    },
    {
        "num": 108,
        "symbol": "Hs"
    },
    {
        "num": 109,
        "symbol": "Mt"
    },
    {
        "num": 110,
        "symbol": "Ds"
    },
    {
        "num": 111,
        "symbol": "Rg"
    },
    {
        "num": 112,
        "symbol": "Cn"
    },
    {
        "num": 113,
        "symbol": "Nh"
    },
    {
        "num": 114,
        "symbol": "Fl"
    },
    {
        "num": 115,
        "symbol": "Mc"
    },
    {
        "num": 116,
        "symbol": "Lv"
    },
    {
        "num": 117,
        "symbol": "Ts"
    },
    {
        "num": 118,
        "symbol": "Og"
    }
];

const elementNumbers = Object.fromEntries(elements.map((element) => [element.symbol, element.num]));

const LAST_ELEMENT = elements.at(-1);

function isSuitable(element: Element) {
    // we might sacrifice J, K, W or Z, so exclude elements with those
    // also, no roman numerals please
    return !(/[jkwzJKWZIVXLCDM]/.test(element.symbol));
}

function elementNumberSum(str: string) {
    let sum = 0;
    for (const possibleElements of str.matchAll(/([A-Z])[a-z]?/g)) {
        // first check if the 2 letter match is an element, then the 1-letter one
        for (const element of possibleElements) {
            if (element in elementNumbers) {
                sum += elementNumbers[element];
                break;
            }
        }
    }
    return sum;
}

export const periodicTablePart = new PasswordPart((builder) => {
    let sum = 23; // Vanadium from Roman numerals
    if ("chess" in builder.parts) {
        // check if there are elements in there
        const chessMove = builder.parts.chess.content as string;
        sum += elementNumberSum(chessMove);
    }

    if ("youtube" in builder.parts) {
        // check if there are elements in there
        const youtubeURL = builder.parts.youtube.content as string;
        sum += elementNumberSum(youtubeURL);
    }

    if (sum == 23) {
        return "HsTm";
    } else {
        // find suitable elements
        let result = "";
        let remaining = 200 - sum;

        if (sum > 200) {
            throw new Error("Element sum over 200");
        }

        while (remaining > 0) {
            // don't go outside of the periodic table
            let num = Math.min(remaining, LAST_ELEMENT.num);
            // avoid unsuitable elements
            while (!isSuitable(elements[num])) {
                num--;
            }
            result += elements[num].symbol;
            remaining -= num;
        }
        return result;
    }
})