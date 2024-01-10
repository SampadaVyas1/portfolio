import React from "react";
import classes from "./button.module.scss";
const Button = (props: any) => {
  const { children, customStyle, otherProps } = props;
  return (
    <div>
      <button
        className={`${classes.buttonWrapper} ${customStyle}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
