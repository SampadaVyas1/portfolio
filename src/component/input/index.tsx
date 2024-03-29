import React from "react";
import classes from "./input.module.scss";
import { IInputProps } from "./input";

const Input = (props: IInputProps) => {
  const {
    name = "",
    type = "text",
    errors,
    register,
    customContainerClass,
    customInputClass,
    getValues,
    clearErrors,
    onChange,
    ...rest
  } = props;
  const errorMsg = errors?.[name]?.message || "";

  const handleBlur = () => {
    if (type !== "checkbox") {
      if (getValues(name) && errors) {
        return null;
      } else if (!getValues(name) && errors) {
        clearErrors(name);
      }
    }
  };

  return (
    <div
      className={`${classes.resetDefaultStyle} ${classes.componentWrapper} ${
        customContainerClass ?? ""
      }`}
    >
      <input
        className={`${classes.input} ${errorMsg && classes.errStateInput} ${
          customInputClass ?? ""
        }`}
        onChange={onChange}
        type={type}
        name={name}
        {...(register && register(name))}
        {...rest}
      />
    </div>
  );
};

export default Input;
