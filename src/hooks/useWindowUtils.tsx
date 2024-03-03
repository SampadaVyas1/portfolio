import { useEffect, useState } from "react";
import { DEVICE_RATIO, DeviceType } from "../enum";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const getDeviceType = () => {
  const { innerWidth: width } = window;

  if (width >= DEVICE_RATIO.DESKTOP) {
    return DeviceType.DESKTOP;
  } else if (width <= DEVICE_RATIO.TABLET && width > DEVICE_RATIO.MOBILE) {
    return DeviceType.TAB;
  } else if (width <= DEVICE_RATIO.MOBILE) {
    return DeviceType.MOBILE;
  }
};

const useWindowUtils = () => {
  const [windowDimensions, setWindowDimensions] = useState<any>(
    getWindowDimensions()
  );
  const [deviceType, setDeviceType] = useState<any>(DeviceType.DESKTOP);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleResize = () => {
    setWindowDimensions(getWindowDimensions());
    setDeviceType(getDeviceType());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return { deviceType, windowDimensions };
};

export default useWindowUtils;
