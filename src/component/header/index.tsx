import React from "react";
import classes from "./header.module.scss";
import useWindowUtil from "../../hooks/useWindowUtils";
import FullWidthNavBar from "../fullWidthNavBar";
import { DeviceType } from "../../enum";
import NavDrawer from "../navDrawer";
const Header = () => {
  const { deviceType } = useWindowUtil();
  return (
    <nav className={classes.navigationbar}>
      {deviceType === DeviceType.DESKTOP ? (
        <FullWidthNavBar />
      ) : (
        deviceType === DeviceType.MOBILE ||
        (deviceType === DeviceType.TAB && <NavDrawer />)
      )}
    </nav>
  );
};

export default Header;
