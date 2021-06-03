import { FC, useState, ChangeEvent, useRef, useEffect } from "react";

import { useHover } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

import styles from "./TextCard.module.scss";

const activeStyle = { scale: 1.1, shadow: 15, zIndex: 1 };
const inactiveStyle = { scale: 1, shadow: 1, zIndex: 0 };
const boxShadow = (unit: number) =>
  `rgba(0, 0, 0, 0.15) 0px ${unit}px ${unit * 2}px 0px`;

export interface TextCardProps {
  value: string;
  onChange: (newValue: string) => void;
}

const TextCard: FC<TextCardProps> = (props) => {
  const { value, onChange } = props;

  const divElRef = useRef<HTMLDivElement>(null);
  const caretPosition = useRef<number | null>(null);
  const [springStyle, springStyleApi] = useSpring(() => inactiveStyle);
  const [active, setActive] = useState(false);
  const bind = useHover((state) => {
    springStyleApi(state.active ? activeStyle : inactiveStyle);
    setActive(state.active);
  });
  const onInput = (e: ChangeEvent<HTMLDivElement>) => {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    caretPosition.current = range?.startOffset || null;
    onChange(e.target.innerText);
  };

  useEffect(() => {
    if (!active) {
      return;
    }

    const selection = window.getSelection();
    const divEl = divElRef.current;
    const node = divEl?.firstChild;
    const maxOffset = value.length;
    const currentOffset = caretPosition.current;

    if (divEl && selection && node && currentOffset !== null) {
      if (maxOffset < currentOffset) {
        console.warn(`warn! cur: ${currentOffset}, max: ${maxOffset}`);
        return;
      }

      const range = document.createRange();
      range.setStart(node, currentOffset);
      range.setEnd(node, currentOffset);

      selection.removeAllRanges();
      selection.addRange(range);
    }
  }, [value]);

  return (
    <animated.div
      {...bind()}
      ref={divElRef}
      className={styles.textCard}
      contentEditable={active}
      onInput={onInput}
      style={{
        ...springStyle,
        boxShadow: springStyle.shadow.to(boxShadow),
      }}
      dangerouslySetInnerHTML={{
        __html: value,
      }}
    />
  );
};

export default TextCard;
