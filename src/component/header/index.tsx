import classes from "./header.module.scss";
import useWindowUtil from "../../hooks/useWindowUtils";
import FullWidthNavBar from "../fullWidthNavBar";

const Header = () => {
  const { deviceType } = useWindowUtil();

  return (
    <nav className={classes.navigationbar}>
      {/* {deviceType === DeviceType.DESKTOP ? (
        <FullWidthNavBar />
      ) : (
        deviceType === DeviceType.MOBILE && <NavDrawer />
      )} */}
      <FullWidthNavBar />
    </nav>
  );
};

export default Header;
