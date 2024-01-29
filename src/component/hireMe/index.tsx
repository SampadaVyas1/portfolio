import React, { useContext } from "react";
import classes from "./hireMe.module.scss";
import Button from "../button";
import { CURSOR_TYPE } from "../cursor-pointer/cursor-type.helper";
import { MouseContext } from "../../mouseContext/mouseContext";
import { ScrollProvider } from "../../context/scrollContext";

const HireMe = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { ref, handleClick } = useContext(ScrollProvider);

  const handleMouseEnter = () => {
    if (cursorType != CURSOR_TYPE.BIGCIRCLE) {
      cursorChangeHandler(CURSOR_TYPE.BIGCIRCLE);
    }
  };

  const handleMouseLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };
  return (
    <div className={classes.hireMe}>
      <div className={classes.freelancer}>I Am Available For Freelancer.</div>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Button
          customStyle={classes.hireMeButton}
          onClick={() => handleClick("ContactUs")}
        >
          Hire Me
        </Button>
      </div>
    </div>
  );
};

export default HireMe;
