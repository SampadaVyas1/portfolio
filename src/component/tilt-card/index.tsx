import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { ITiltCardComponent } from "./tilt-card";
import classes from "./tilt-card.module.scss";
const defaultOptions = {
  reverse: true,
  max: 22, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const TiltCardComponent = (props: ITiltCardComponent) => {
  const {
    image,
    textOnImage,
    className,
    customStylingOnImage,
    onClick,
    imageVariant,
    customStyleOnImageText,
    tiltCustomButton,
    isCustomBtn = false,
    children,
    customStyleImageContainer,
    customGradientClass,
    customStylingOnTiltCard,
    isTiltCard = true,
    ...restProps
  } = props;

  const [corner, setCorner] = useState<string>();

  const isCursorNearCorner = (event: {
    currentTarget: { getBoundingClientRect: () => any };
    clientX: number;
    clientY: number;
  }) => {
    console.log("hello", corner);
    const bounds = event.currentTarget.getBoundingClientRect();
    const cursorX = (event.clientX - bounds.left) / bounds.width;
    const cursorY = (event.clientY - bounds.top) / bounds.height;

    const isCursorNearCorner =
      (cursorX < 0.1 || cursorX > 0.9) && (cursorY < 0.2 || cursorY > 0.8);

    if (isCursorNearCorner) {
      const corner =
        cursorX > 0.5
          ? cursorY > 0.5
            ? "bottom-right"
            : "top-right"
          : cursorY > 0.5
          ? "bottom-left"
          : "top-left";
      setCorner(corner);
    } else {
      if (cursorX > 0.6 && cursorY > 0.1) {
        setCorner("right");
      } else if (cursorX < 0.4 && cursorY > 0.1) {
        setCorner("left");
      } else if (cursorX > 0.1 && cursorY < 0.4) {
        setCorner("top");
      } else if (cursorX > 0.1 && cursorY > 0.6) {
        setCorner("bottom");
      } else {
        setCorner("center");
      }
    }
    console.log(corner);
  };

  return (
    <>
      <Tilt
        options={defaultOptions}
        onMouseLeave={() => {
          setCorner("");
        }}
        onMouseMove={isCursorNearCorner}
      >
        <div className={`${classes.gradientEffect}`} data-corner={corner || ""}>
          <div
            className={`${classes.imageContainer} ${customStyleImageContainer}`}
          >
            {children}
          </div>
        </div>
      </Tilt>
    </>
  );
};
export default memo(TiltCardComponent);
