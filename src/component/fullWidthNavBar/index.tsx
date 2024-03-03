import React, { Fragment, useContext, useRef, useState } from "react";
import { APP_ROUTES } from "../../utils/constants/common";
import classes from "./FullWidthNavBar.module.scss";
import { MouseContext } from "../../mouseContext/mouseContext";
import { CURSOR_TYPE } from "../cursor-pointer/cursor-type.helper";
import Button from "../button";
import hanshake from "../../asset/svg/handShake.svg";
import { ScrollProvider } from "../../context/scrollContext";

const FullWidthNavBar = () => {
  const routes = Object.values(APP_ROUTES);
  const [isHovered, serIsHovered] = useState<any>(0);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { ref, handleClick } = useContext(ScrollProvider);

  const handleMouseEnter = (isUnderline?: any) => {
    if (cursorType != CURSOR_TYPE.BIGCIRCLE) {
      cursorChangeHandler(CURSOR_TYPE.BIGCIRCLE);
    }
    isUnderline && serIsHovered(isUnderline);
  };
  const reloadPage = () => {
    window.location.reload();
  };
  const handleMouseLeave = () => {
    serIsHovered(false);
    cursorChangeHandler(CURSOR_TYPE.DOTCURSOR);
  };

  const handleRouteClick = (route: string) => {
    handleClick(route);
  };

  return (
    <Fragment>
      <div className={classes.fullWidthNav}>
        <div>
          <span
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={handleMouseLeave}
            onClick={reloadPage}
            className={classes.portfolio}
          >
            Portfolio
          </span>
        </div>
        <ul className={classes.listOfItems}>
          {routes.map((route: string, index: number) => {
            return (
              <li
                className={
                  isHovered === index + 1
                    ? `${classes.listOfItem} ${classes.activeList}`
                    : classes.listOfItem
                }
              >
                <div
                  onMouseEnter={() => handleMouseEnter(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleRouteClick(route)}
                >
                  {route}
                </div>
              </li>
            );
          })}
          <div
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={handleMouseLeave}
          >
            <Button customStyle={classes.buttonContainer}>
              <img
                src={hanshake}
                height={35}
                width={35}
                className={classes.icon}
                onClick={() => handleRouteClick("ContactUs")}
              />
              ContactUs
            </Button>
          </div>
        </ul>
      </div>
    </Fragment>
  );
};

export default FullWidthNavBar;
