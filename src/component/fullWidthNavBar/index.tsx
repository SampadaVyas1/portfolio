import React, { Fragment, useContext, useState } from "react";
import Grid from "../grid";
import useWindowUtils from "../../hooks/useWindowUtils";
import { APP_ROUTES } from "../../utils/constants/common";
import classes from "./FullWidthNavBar.module.scss";
import { MouseContext } from "../../mouseContext/mouseContext";
import { CURSOR_TYPE } from "../cursor-pointer/cursor-type.helper";
import Button from "../button";
import hanshake from "../../asset/svg/handShake.svg";
const FullWidthNavBar = () => {
  const routes = Object.values(APP_ROUTES);
  const [isHovered, serIsHovered] = useState<any>(0);
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const handleMouseEnter = (isUnderline?: any) => {
    if (cursorType != CURSOR_TYPE.BIGCIRCLE) {
      console.log("Cursor type");
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
  return (
    <Fragment>
      <Grid container className={classes.fullWidthNav}>
        <Grid item sm={2} lg={6} md={4} className={classes.portfolioWrapper}>
          <span
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={handleMouseLeave}
            onClick={reloadPage}
            className={classes.portfolio}
          >
            Portfolio
          </span>
        </Grid>
        <Grid item sm={2} lg={6} md={4}>
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
                />
                ContactUs
              </Button>
            </div>
          </ul>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FullWidthNavBar;