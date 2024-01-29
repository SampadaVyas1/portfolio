import React from "react";
import classes from "./text-area.module.scss";
const TextArea = (props: any) => {
  const {
    name = "",
    errors,
    register,
    customContainerClass,
    customTextAreaClass,
    onChange,
    ...rest
  } = props;

  return (
    <div
      className={`${customContainerClass ? customContainerClass : ""}
      ${classes.componentWrapper}
        `}
    >
      <textarea
        name={name}
        onChange={onChange}
        className={` ${classes.textArea} ${
          customTextAreaClass ? customTextAreaClass : ""
        }`}
        {...(register && register(name))}
        {...rest}
      />
    </div>
  );
};

export default TextArea;
