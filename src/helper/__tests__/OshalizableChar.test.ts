import OshalizableChar from "../OshalizableChar";
import { Variant } from "../UnicodeSymbols";

const toBasic = (source: string) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "basicLatin",
      })
    )
    .join("");
};

const toSerif = (source: string, variant: Variant) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "serif",
        variant,
      })
    )
    .join("");
};

const toSansSerif = (source: string, variant: Variant) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "sansSerif",
        variant,
      })
    )
    .join("");
};

const toScript = (source: string, variant: Variant) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "script",
        variant,
      })
    )
    .join("");
};

const toFraktur = (source: string, variant: Variant) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "fraktur",
        variant,
      })
    )
    .join("");
};

const toMonoSpace = (source: string, variant: Variant) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "monoSpace",
        variant,
      })
    )
    .join("");
};

const toDoubleStruck = (source: string, variant: Variant) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "doubleStruck",
        variant,
      })
    )
    .join("");
};

describe("OshalizableChar", () => {
  describe(`Latin letters Serif`, () => {
    describe.each`
      normal | bold   | italic | boldItalic
      ${"A"} | ${"????"} | ${"????"} | ${"????"}
      ${"Z"} | ${"????"} | ${"????"} | ${"????"}
      ${"a"} | ${"????"} | ${"????"} | ${"????"}
      ${"h"} | ${"????"} | ${"???"} | ${"????"}
      ${"z"} | ${"????"} | ${"????"} | ${"????"}
    `("mutual conversion ($normal)", ({ normal, bold, italic, boldItalic }) => {
      test.each`
        test                        | actualValue                      | expectValue
        ${"normal => bold"}         | ${toSerif(normal, "bold")}       | ${bold}
        ${"bold => normal"}         | ${toSerif(bold, "normal")}       | ${normal}
        ${"normal => italic"}       | ${toSerif(normal, "italic")}     | ${italic}
        ${"italic => normal"}       | ${toSerif(italic, "normal")}     | ${normal}
        ${"normal =>  bold italic"} | ${toSerif(normal, "boldItalic")} | ${boldItalic}
        ${"bold italic => normal"}  | ${toSerif(boldItalic, "normal")} | ${normal}
      `("$test", ({ actualValue, expectValue }) => {
        expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
      });
    });
  });

  describe(`Latin letters Sans-serif`, () => {
    describe.each`
      serif  | normal | bold   | italic | boldItalic
      ${"A"} | ${"????"} | ${"????"} | ${"????"} | ${"????"}
      ${"M"} | ${"????"} | ${"????"} | ${"????"} | ${"????"}
      ${"Z"} | ${"????"} | ${"????"} | ${"????"} | ${"????"}
      ${"a"} | ${"????"} | ${"????"} | ${"????"} | ${"????"}
      ${"m"} | ${"????"} | ${"????"} | ${"????"} | ${"????"}
      ${"z"} | ${"????"} | ${"????"} | ${"????"} | ${"????"}
    `(
      "mutual conversion ($serif)",
      ({ serif, normal, bold, italic, boldItalic }) => {
        test.each`
          test                        | actualValue                          | expectValue
          ${"normal => bold"}         | ${toSansSerif(normal, "bold")}       | ${bold}
          ${"bold => normal"}         | ${toSansSerif(bold, "normal")}       | ${normal}
          ${"normal => italic"}       | ${toSansSerif(normal, "italic")}     | ${italic}
          ${"italic => normal"}       | ${toSansSerif(italic, "normal")}     | ${normal}
          ${"normal =>  bold italic"} | ${toSansSerif(normal, "boldItalic")} | ${boldItalic}
          ${"bold italic => normal"}  | ${toSansSerif(boldItalic, "normal")} | ${normal}
        `("$test", ({ actualValue, expectValue }) => {
          expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
        });
      }
    );
  });

  describe(`Latin letters Script`, () => {
    describe.each`
      serif  | normal | bold
      ${"A"} | ${"????"} | ${"????"}
      ${"B"} | ${"???"} | ${"????"}
      ${"E"} | ${"???"} | ${"????"}
      ${"F"} | ${"???"} | ${"????"}
      ${"H"} | ${"???"} | ${"????"}
      ${"I"} | ${"???"} | ${"????"}
      ${"L"} | ${"???"} | ${"????"}
      ${"M"} | ${"???"} | ${"????"}
      ${"R"} | ${"???"} | ${"????"}
      ${"Z"} | ${"????"} | ${"????"}
      ${"a"} | ${"????"} | ${"????"}
      ${"e"} | ${"???"} | ${"????"}
      ${"g"} | ${"???"} | ${"????"}
      ${"o"} | ${"???"} | ${"????"}
      ${"z"} | ${"????"} | ${"????"}
    `("mutual conversion ($serif)", ({ serif, normal, bold }) => {
      test.each`
        test                | actualValue                 | expectValue
        ${"normal => bold"} | ${toScript(normal, "bold")} | ${bold}
        ${"bold => normal"} | ${toScript(bold, "normal")} | ${normal}
      `("$test", ({ actualValue, expectValue }) => {
        expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
      });
    });
  });

  describe(`Latin letters Fraktur`, () => {
    describe.each`
      serif  | normal | bold
      ${"A"} | ${"????"} | ${"????"}
      ${"C"} | ${"???"} | ${"????"}
      ${"H"} | ${"???"} | ${"????"}
      ${"I"} | ${"???"} | ${"????"}
      ${"R"} | ${"???"} | ${"????"}
      ${"Z"} | ${"???"} | ${"????"}
      ${"a"} | ${"????"} | ${"????"}
      ${"z"} | ${"????"} | ${"????"}
    `("mutual conversion ($serif)", ({ serif, normal, bold }) => {
      test.each`
        test                | actualValue                  | expectValue
        ${"normal => bold"} | ${toFraktur(normal, "bold")} | ${bold}
        ${"bold => normal"} | ${toFraktur(bold, "normal")} | ${normal}
      `("$test", ({ actualValue, expectValue }) => {
        expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
      });
    });
  });

  describe(`Latin letters Mono-space`, () => {
    describe.each`
      serif  | normal
      ${"A"} | ${"????"}
      ${"M"} | ${"????"}
      ${"Z"} | ${"????"}
      ${"a"} | ${"????"}
      ${"m"} | ${"????"}
      ${"z"} | ${"????"}
    `("mutual conversion ($serif)", ({ serif, normal }) => {
      test.each`
        test                 | actualValue                     | expectValue
        ${"serif => normal"} | ${toMonoSpace(serif, "normal")} | ${normal}
        ${"normal => serif"} | ${toBasic(normal)}              | ${serif}
      `("$test", ({ actualValue, expectValue }) => {
        expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
      });
    });
  });

  describe(`Latin letters Double-struck`, () => {
    describe.each`
      serif  | bold
      ${"A"} | ${"????"}
      ${"C"} | ${"???"}
      ${"H"} | ${"???"}
      ${"N"} | ${"???"}
      ${"P"} | ${"???"}
      ${"Q"} | ${"???"}
      ${"R"} | ${"???"}
      ${"Z"} | ${"???"}
      ${"a"} | ${"????"}
      ${"m"} | ${"????"}
      ${"z"} | ${"????"}
    `("mutual conversion ($serif)", ({ serif, bold }) => {
      test.each`
        test               | actualValue                      | expectValue
        ${"serif => bold"} | ${toDoubleStruck(serif, "bold")} | ${bold}
        ${"bold => serif"} | ${toBasic(bold)}                 | ${serif}
      `("$test", ({ actualValue, expectValue }) => {
        expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
      });
    });
  });

  describe("Digits", () => {
    describe.each`
      serifNormal | serifBold | sansSerifNormal | sansSerifBold
      ${"0"}      | ${"????"}    | ${"????"}          | ${"????"}
      ${"5"}      | ${"????"}    | ${"????"}          | ${"????"}
      ${"9"}      | ${"????"}    | ${"????"}          | ${"????"}
    `(
      "mutual conversion ($serifNormal)",
      ({ serifNormal, serifBold, sansSerifNormal, sansSerifBold }) => {
        test.each`
          test                                    | actualValue                           | expectValue
          ${"serifNormal     => serifBold"}       | ${toSerif(serifNormal, "bold")}       | ${serifBold}
          ${"serifBold       => serifNormal"}     | ${toSerif(serifBold, "normal")}       | ${serifNormal}
          ${"serifNormal     => sansSerifNormal"} | ${toSansSerif(serifNormal, "normal")} | ${sansSerifNormal}
          ${"sansSerifNormal => serifNormal"}     | ${toSerif(sansSerifNormal, "normal")} | ${serifNormal}
          ${"serifNormal     =>  sansSerifBold"}  | ${toSansSerif(serifNormal, "bold")}   | ${sansSerifBold}
          ${"sansSerifBold   => serifNormal"}     | ${toSerif(sansSerifBold, "normal")}   | ${serifNormal}
        `("$test", ({ actualValue, expectValue }) => {
          expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
        });
      }
    );
  });
});
