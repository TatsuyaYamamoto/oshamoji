import {
  AsciiDigits,
  LowercaseLatinAlphabet,
  UppercaseLatinAlphabet,
} from "./BasicLatin";
import { UnicodeSymbols } from "./UnicodeSymbols";
import { objectFlatten } from "./utils";

/* A */
const LatinUppercaseSerifNormalLetters = UppercaseLatinAlphabet;

/* 𝐀 */
const LatinUppercaseSerifBoldLetters: UnicodeSymbols = {
  typeface: "serif",
  variant: "bold",
  characterType: "latinLetter",
  letterCase: "uppercase",
  codePointRange: {
    from: "U+1D400",
    to: "U+1D419",
  },
};

/* 𝐴 */
const LatinUppercaseSerifItalicLetters: UnicodeSymbols = {
  typeface: "serif",
  variant: "italic",
  characterType: "latinLetter",
  letterCase: "uppercase",
  codePointRange: {
    from: "U+1D434",
    to: "U+1D44D",
  },
};

/* 𝑨 */
const LatinUppercaseSerifBoldItalicLetters: UnicodeSymbols = {
  typeface: "serif",
  variant: "boldItalic",
  characterType: "latinLetter",
  letterCase: "uppercase",
  codePointRange: {
    from: "U+1D468",
    to: "U+1D481",
  },
};

/* 𝖠 */
const LatinUppercaseSansSerifNormalLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "normal",
  characterType: "latinLetter",
  letterCase: "uppercase",
  codePointRange: {
    from: "U+1D5A0",
    to: "U+1D5B9",
  },
};

/* 𝗔 */
const LatinUppercaseSansSerifBoldLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "bold",
  characterType: "latinLetter",
  letterCase: "uppercase",
  codePointRange: {
    from: "U+1D5D4",
    to: "U+1D5ED",
  },
};

/* 𝘈 */
const LatinUppercaseSansSerifItalicLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "italic",
  characterType: "latinLetter",
  letterCase: "uppercase",
  codePointRange: {
    from: "U+1D608",
    to: "U+1D621",
  },
};

/* 𝘼 */
const LatinUppercaseSansSerifBoldItalicLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "boldItalic",
  characterType: "latinLetter",
  letterCase: "uppercase",
  codePointRange: {
    from: "U+1D63C",
    to: "U+1D655",
  },
};

/* a */
const LatinLowercaseSerifNormalLetters = LowercaseLatinAlphabet;

/* 𝐚 */
const LatinLowercaseSerifBoldLetters: UnicodeSymbols = {
  typeface: "serif",
  variant: "bold",
  characterType: "latinLetter",
  letterCase: "lowercase",
  codePointRange: {
    from: "U+1D41A",
    to: "U+1D433",
  },
};

/* 𝑎 */
const LatinLowercaseSerifItalicLetters: UnicodeSymbols = {
  typeface: "serif",
  variant: "italic",
  characterType: "latinLetter",
  letterCase: "lowercase",
  codePointRange: {
    from: "U+1D44E",
    to: "U+1D467",
  },
  reservedSymbols: [
    {
      /* ℎ */
      codePoint: "U+1D455",
      assignedCodePoint: "U+210E",
    },
  ],
};

/* 𝒂 */
const LatinLowercaseSerifBoldItalicLetters: UnicodeSymbols = {
  typeface: "serif",
  variant: "boldItalic",
  characterType: "latinLetter",
  letterCase: "lowercase",
  codePointRange: {
    from: "U+1D482",
    to: "U+1D49B",
  },
};

/* a */
const LatinLowercaseSansSerifNormalLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "normal",
  characterType: "latinLetter",
  letterCase: "lowercase",
  codePointRange: {
    from: "U+1D5BA",
    to: "U+1D5D3",
  },
};

/* 𝐚 */
const LatinLowercaseSansSerifBoldLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "bold",
  characterType: "latinLetter",
  letterCase: "lowercase",
  codePointRange: {
    from: "U+1D5EE",
    to: "U+1D607",
  },
};

/* 𝑎 */
const LatinLowercaseSansSerifItalicLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "italic",
  characterType: "latinLetter",
  letterCase: "lowercase",
  codePointRange: {
    from: "U+1D622",
    to: "U+1D63B",
  },
};

/* 𝒂 */
const LatinLowercaseSansSerifBoldItalicLetters: UnicodeSymbols = {
  typeface: "sansSerif",
  variant: "boldItalic",
  characterType: "latinLetter",
  letterCase: "lowercase",
  codePointRange: {
    from: "U+1D656",
    to: "U+1D66F",
  },
};

/* 𝟎 */
export const BoldDigits: UnicodeSymbols = {
  typeface: "serif",
  variant: "bold",
  characterType: "digit",
  codePointRange: {
    from: "U+1D7CE",
    to: "U+1D7D7",
  },
};

export const MathematicalAlphanumericStyleMap = {
  latinLetter: {
    uppercase: {
      serif: {
        normal: LatinUppercaseSerifNormalLetters,
        bold: LatinUppercaseSerifBoldLetters,
        italic: LatinUppercaseSerifItalicLetters,
        boldItalic: LatinUppercaseSerifBoldItalicLetters,
      },
      sansSerif: {
        normal: LatinUppercaseSansSerifNormalLetters,
        bold: LatinUppercaseSansSerifBoldLetters,
        italic: LatinUppercaseSansSerifItalicLetters,
        boldItalic: LatinUppercaseSansSerifBoldItalicLetters,
      },
    },
    lowercase: {
      serif: {
        normal: LatinLowercaseSerifNormalLetters,
        bold: LatinLowercaseSerifBoldLetters,
        italic: LatinLowercaseSerifItalicLetters,
        boldItalic: LatinLowercaseSerifBoldItalicLetters,
      },
      sansSerif: {
        normal: LatinLowercaseSansSerifNormalLetters,
        bold: LatinLowercaseSansSerifBoldLetters,
        italic: LatinLowercaseSansSerifItalicLetters,
        boldItalic: LatinLowercaseSansSerifBoldItalicLetters,
      },
    },
  },
  digit: {
    serif: {
      normal: AsciiDigits,
      bold: BoldDigits,
    },
  },
} as const;

export const MathematicalAlphanumericStyles = [
  ...objectFlatten(MathematicalAlphanumericStyleMap.latinLetter.uppercase),
  ...objectFlatten(MathematicalAlphanumericStyleMap.latinLetter.lowercase),
  ...objectFlatten(MathematicalAlphanumericStyleMap.digit),
];
