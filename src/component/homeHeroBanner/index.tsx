import React, { useContext, useEffect, useState } from "react";
import classes from "./homeHeroBanner.module.scss";
//@ts-ignore
import Typist from "react-typist-component";
import Button from "../button";
import { CURSOR_TYPE } from "../cursor-pointer/cursor-type.helper";
import { MouseContext } from "../../mouseContext/mouseContext";

const HomeHeroBanner = () => {
  const [count, setCount] = useState<number>(0);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);

  const handleSetTimeOut = () => {
    setTimeout(() => {
      setCount(0);
    }, 100);
  };

  const downloadCv = () => {
    window.open(
      "https://drive.google.com/file/d/1B5LYj1be8MZYcHDNcK--DgyI5WW3zSgm/view",
      "_blank"
    );
  };

  const handleMouseEnter = () => {
    if (cursorType != CURSOR_TYPE.BIGCIRCLE) {
      cursorChangeHandler(CURSOR_TYPE.BIGCIRCLE);
    }
  };

  const handleMouseLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };
  useEffect(() => setCount(1), [count]);
  const handleTitleForHome = () => {
    return (
      <div className={classes.homeTitle} id="">
        <div className={classes.helloText}>Hello & Welcome !</div>
        {count && (
          <Typist
            cursor={<span>|</span>}
            onTypingDone={() => handleSetTimeOut()}
          >
            <span>{"I'm Sampada Vyas." || " "}</span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={"Sampada Vyas.".length} />
            <span>{"a Coder." || " "}</span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={"a Coder.".length} />
            <span>{"Geek" || " "}</span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={"Geek.".length} />
            <span>{" a Developer" || " "}</span>
            <Typist.Delay ms={1000} />
            <Typist.Backspace count={"a Developer.".length} />
          </Typist>
        )}
        {/* <Typist>Animate this text.</Typist>; */}
      </div>
    );
  };
  return (
    <div>
      <div className={classes.homeWrapper}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/006/660/323/large_2x/full-moon-with-many-stars-and-reflection-on-water-dark-night-sky-background-free-photo.jpg"
          alt=""
          className={classes.backgroundImage}
        />

        <div className={classes.typistInfo}>{handleTitleForHome()}</div>
        <div className={classes.subText}>
          <div>Empowering the Future through Code</div>
          <div>Turning Ideas into Reality</div>
        </div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Button customStyle={classes.downloadCv} onClick={downloadCv}>
            Download CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeroBanner;
