import React from "react";
import classes from "./button.module.scss";
const Button = (props: any) => {
  const { children, customStyle, onClick, otherProps } = props;
  return (
    <div>
      <button
        className={`${classes.buttonWrapper} ${customStyle}`}
        onClick={onClick}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
