import OshalizableChar from "../OshalizableChar";

const toNormal = (source: string) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "basicLatin",
      })
    )
    .join("");
};

const toBold = (source: string) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "serif",
        variant: "bold",
      })
    )
    .join("");
};

const toItalic = (source: string) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "serif",
        variant: "italic",
      })
    )
    .join("");
};

const toBoldItalic = (source: string) => {
  const chars = OshalizableChar.from(source);
  return chars
    .map((char) =>
      char.convert({
        block: "mathematicalAlphanumeric",
        typeface: "serif",
        variant: "boldItalic",
      })
    )
    .join("");
};

describe("OshalizableChar", () => {
  describe(`Serif`, () => {
    describe.each`
      normal | bold   | italic | boldItalic
      ${"A"} | ${"𝐀"} | ${"𝐴"} | ${"𝑨"}
      ${"Z"} | ${"𝐙"} | ${"𝑍"} | ${"𝒁"}
      ${"a"} | ${"𝐚"} | ${"𝑎"} | ${"𝒂"}
      ${"h"} | ${"𝐡"} | ${"ℎ"} | ${"𝒉"}
      ${"z"} | ${"𝐳"} | ${"𝑧"} | ${"𝒛"}
    `("mutual conversion ($normal)", ({ normal, bold, italic, boldItalic }) => {
      test.each`
        test                        | actualValue             | expectValue
        ${"normal => bold"}         | ${toBold(normal)}       | ${bold}
        ${"bold => normal"}         | ${toNormal(bold)}       | ${normal}
        ${"normal => italic"}       | ${toItalic(normal)}     | ${italic}
        ${"italic => normal"}       | ${toNormal(italic)}     | ${normal}
        ${"normal =>  bold italic"} | ${toBoldItalic(normal)} | ${boldItalic}
        ${"bold italic => normal"}  | ${toNormal(boldItalic)} | ${normal}
      `("$test", ({ actualValue, expectValue }) => {
        expect(actualValue.codePointAt(0)).toBe(expectValue.codePointAt(0));
      });
    });
  });

  describe.skip(`Sans-serif`, () => {
    describe.each`
      normal | bold   | italic | boldItalic
      ${"A"} | ${"𝐀"} | ${"𝐴"} | ${"𝑨"}
      ${"B"} | ${""}  | ${""}  | ${""}
      ${"C"} | ${""}  | ${""}  | ${""}
      ${"D"} | ${""}  | ${""}  | ${""}
      ${"E"} | ${""}  | ${""}  | ${""}
      ${"F"} | ${""}  | ${""}  | ${""}
      ${"G"} | ${""}  | ${""}  | ${""}
      ${"H"} | ${""}  | ${""}  | ${""}
      ${"I"} | ${""}  | ${""}  | ${""}
      ${"J"} | ${""}  | ${""}  | ${""}
      ${"K"} | ${""}  | ${""}  | ${""}
      ${"L"} | ${""}  | ${""}  | ${""}
      ${"M"} | ${""}  | ${""}  | ${""}
      ${"N"} | ${""}  | ${""}  | ${""}
      ${"O"} | ${""}  | ${""}  | ${""}
      ${"P"} | ${""}  | ${""}  | ${""}
      ${"Q"} | ${""}  | ${""}  | ${""}
      ${"R"} | ${""}  | ${""}  | ${""}
      ${"S"} | ${""}  | ${""}  | ${""}
      ${"T"} | ${""}  | ${""}  | ${""}
      ${"U"} | ${""}  | ${""}  | ${""}
      ${"V"} | ${""}  | ${""}  | ${""}
      ${"W"} | ${""}  | ${""}  | ${""}
      ${"X"} | ${""}  | ${""}  | ${""}
      ${"Y"} | ${""}  | ${""}  | ${""}
      ${"Z"} | ${""}  | ${""}  | ${""}
    `("test", ({ a, b, expected }) => {});
  });
});
