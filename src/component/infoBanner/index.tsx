import React, { useContext } from "react";
import TextAnimator from "../../component/text-animator";
import profileImg from "../../png/IMG_20230630_201808.jpg";
import classes from "./infoBanner.module.scss";
import Typography from "../typography";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { CURSOR_TYPE } from "../cursor-pointer/cursor-type.helper";
import { MouseContext } from "../../mouseContext/mouseContext";
import { ScrollProvider } from "../../context/scrollContext";

export const socialMedia = [
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

const InfoBanner = () => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { handleClick, ref, setId } = useContext(ScrollProvider);
  const handleMouseEnter = () => {
    if (cursorType != CURSOR_TYPE.BIGCIRCLE) {
      cursorChangeHandler(CURSOR_TYPE.BIGCIRCLE);
    }
  };

  const handleMouseLeave = () => {
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };
  return (
    <div className={classes.infoContainer} ref={ref} id="About">
      <div>
        <img
          src={
            "https://us.123rf.com/450wm/nsit0108/nsit01082307/nsit0108230700481/207896402-woman-game-designer-banner-creative-screen-generate-ai.jpg?ver=6"
          }
          alt=""
          className={classes.profilePic}
        />
      </div>
      <div>
        <Typography variant={"body-1"} customStyle={classes.aboutMeTitle}>
          About me
        </Typography>
        <Typography variant={"body-1"}>Hi there! I'm</Typography>
        {/* <TextAnimator text={"Hi there! I'm"} variant={"body-3"} />
        <TextAnimator
          text={"Sampada Vyas,a Software working in Pune"}
          variant={"body-1"}
        />
        <TextAnimator
          variant={"heading-3"}
          text={
            "I am an enthusiastic and detail-oriented Software Engineer with a strong focus on React development. With a proven track record in creating dynamic and responsive web applications, my passion for technology is matched only by my dedication to delivering high-quality, efficient, and user-friendly solutions. "
          }
        /> */}
        <Typography variant={"heading-3"}>
          <ul>
            <li>
              I am an enthusiastic and detail-oriented Software Engineer with a
              strong focus on React development.
            </li>
            <li>
              With a proven track record in creating dynamic and responsive web
              applications, my passion for technology is matched only by my
              dedication to delivering high-quality, efficient, and
              user-friendly solutions.
            </li>
          </ul>
        </Typography>
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
      </div>
      {/* <div>
        <img
          src={
            "https://us.123rf.com/450wm/nsit0108/nsit01082307/nsit0108230700481/207896402-woman-game-designer-banner-creative-screen-generate-ai.jpg?ver=6"
          }
          alt=""
          // height={400}
          // width={500}
          className={classes.profilePic}
        />
      </div> */}
    </div>
  );
};

export default InfoBanner;
