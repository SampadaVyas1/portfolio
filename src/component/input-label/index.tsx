import React from "react";
import Typography from "../typography";
import classes from "./input-label.module.scss";
const InputLabel = (props: any) => {
  const {
    label,
    secondaryLabel,
    isRequired = true,
    isError = false,
    customLabelClass,
  } = props;
  return (
    <Typography
      variant={"input-label"}
      customStyle={`${classes.labelContainer} ${isError && classes.errState} ${
        customLabelClass ? customLabelClass : ""
      }`}
    >
      {label && (
        <span>
          {label}
          {isRequired && <span className={classes.required}>*</span>}
        </span>
      )}
      {secondaryLabel && (
        <span className={classes.secondaryLabel}>{secondaryLabel}</span>
      )}
    </Typography>
  );
};

export default InputLabel;
