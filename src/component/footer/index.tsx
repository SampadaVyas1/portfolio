import React, { useContext } from "react";
import classes from "./footer.module.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MouseContext } from "../../mouseContext/mouseContext";
import { CURSOR_TYPE } from "../cursor-pointer/cursor-type.helper";
const socialMedia = [
  <FaLinkedinIn />,
  <FaXTwitter />,
  <FaGithub />,
  <FaFacebook />,
];

const Footer = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const handleMouseEnter = () => {
    if (cursorType != CURSOR_TYPE.BIGCIRCLE) {
      cursorChangeHandler(CURSOR_TYPE.BIGCIRCLE);
    }
  };

  const handleMouseLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };
  return (
    <div className={classes.footer}>
      <div className={classes.iconList}>
        {socialMedia.map((icon) => {
          return (
            <div
              className={classes.icon}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {icon}
            </div>
          );
        })}
      </div>
      <div className={classes.copyright}>
        © Copyright | Sampada Vyas 2024 All Right Reserved
      </div>
    </div>
  );
};

export default Footer;
