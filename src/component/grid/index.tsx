import React, { Fragment, ReactNode } from "react";
import useWindowUtils from "../../hooks/useWindowUtils";
import classes from "./grid.module.scss";
import { DeviceType } from "../../enum";

const Grid = ({
  className,
  container,
  item,
  fullwidth,
  sm = 4,
  md = 8,
  lg = 12,
  children,
}: {
  className?: string;
  container?: boolean;
  children: ReactNode;
  fullwidth?: boolean;
  item?: boolean;
  sm?: number;
  md?: number;
  lg?: number;
}) => {
  const { deviceType, windowDimensions } = useWindowUtils();

  const getGridType = () => {
    const className = "gridItem-";

    switch (deviceType) {
      case DeviceType.MOBILE:
        return `${className}${fullwidth ? 4 : sm}`;
      case DeviceType.TAB:
        return `${className}${fullwidth ? 8 : md}`;
      default:
        return `${className}${fullwidth ? 12 : lg}`;
    }
  };

  return (
    <Fragment>
      {container ? (
        <div className={`${classes.gridContainer} ${className || ""}`}>
          {children}
        </div>
      ) : item ? (
        <div className={`${classes[getGridType()]} ${className || ""}`}>
          {children}
        </div>
      ) : fullwidth ? (
        <div className={`${classes[getGridType()]} ${className || ""}`}>
          {children}
        </div>
      ) : (
        children
      )}
    </Fragment>
  );
};

export default Grid;
