import React, { useContext } from "react";
import classes from "./footer.module.scss";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { MouseContext } from "../../mouseContext/mouseContext";
import { CURSOR_TYPE } from "../cursor-pointer/cursor-type.helper";
const socialMedia = [
  {
    icon: <FaLinkedinIn />,
    link: "https://www.linkedin.com/in/sampada-vyas-02b82b171?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    icon: <FaXTwitter />,
    link: "https://x.com/VyasSampada?t=q21Cu0z-6Nx2vUuug6zAFA&s=09",
  },
  { icon: <FaGithub />, link: "https://github.com/SampadaVyas1" },
  { icon: <FaFacebook />, link: "" },
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
        {socialMedia.map((item) => {
          return (
            <div
              className={classes.icon}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={() => window.open(item.link, "_blank")}
            >
              {item.icon}
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
