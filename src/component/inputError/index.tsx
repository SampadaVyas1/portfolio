import React from "react";
import Typography from "../typography";
import classes from "./inputError.module.scss";
const InputError = (props: any) => {
  const { errorMsg } = props;
  return errorMsg ? (
    <Typography variant="error" className={classes.errState}>
      {errorMsg}
    </Typography>
  ) : null;
};

export default InputError;
