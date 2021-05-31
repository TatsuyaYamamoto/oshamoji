import { FC, useEffect, useState } from "react";
import OshalizableChar from "../helper/OshalizableChar";

const Fonts: FC = () => {
  const sourceText = `123 abc ABC 456`;
  const [oshamojiList, setOshamojiList] = useState<string[]>([]);

  useEffect(() => {
    const oshalizableChars = OshalizableChar.from(sourceText);

    const basicLatin = oshalizableChars
      .map((char) => char.convert({ block: "basicLatin" }))
      .join("");
    const bold = oshalizableChars
      .map((char) =>
        char.convert({
          block: "mathematicalAlphanumeric",
          typeface: "serif",
          variant: "bold",
        })
      )
      .join("");
    const italic = oshalizableChars
      .map((char) =>
        char.convert({
          block: "mathematicalAlphanumeric",
          typeface: "serif",
          variant: "italic",
        })
      )
      .join("");
    const boldItalic = oshalizableChars
      .map((char) =>
        char.convert({
          block: "mathematicalAlphanumeric",
          typeface: "serif",
          variant: "boldItalic",
        })
      )
      .join("");

    setOshamojiList([basicLatin, bold, italic, boldItalic]);
  }, []);

  return (
    <div>
      <div>{sourceText}</div>
      <ul>
        {oshamojiList.map((o, i) => (
          <li key={i}>{o}</li>
        ))}
      </ul>
    </div>
  );
};

export default Fonts;
