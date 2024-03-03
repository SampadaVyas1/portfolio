import React, { useState } from "react";
import classes from "./NavDrawer.module.scss";
import menu from "../../asset/svg/menu.svg";
import close from "../../asset/svg/close.svg";
import { APP_ROUTES } from "../../utils/constants/common";

const NavDrawer = () => {
  const routes = Object.values(APP_ROUTES);
  const [drawer, setDrawer] = useState<boolean>(false);
  const handleOnClickDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div className={classes.drawer}>
      <div style={{ zIndex: "100" }}>
        {!drawer ? (
          <img
            src={menu}
            alt=""
            className={classes.menuIcon}
            height={28}
            width={28}
            onClick={handleOnClickDrawer}
          />
        ) : (
          <img
            src={close}
            alt=""
            className={classes.menuIcon}
            height={28}
            width={28}
            onClick={handleOnClickDrawer}
          />
        )}
      </div>
      {drawer && (
        <div className={classes.listItems}>
          <ul className={classes.unorderList}>
            {routes.map((route: string, index: number) => {
              return (
                <li className={classes.list}>
                  <div>{route}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavDrawer;
