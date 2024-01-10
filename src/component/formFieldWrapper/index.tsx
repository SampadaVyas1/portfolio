import React from "react";
import InputLabel from "../input-label";
import { FieldType } from "../../constants/common";
import TextArea from "../text-area";
import Input from "../input";
import classes from "./formFieldWrapper.module.scss";
import InputError from "../inputError";

const FormFieldWrapper = (props: any) => {
  const {
    label,
    isRequired,
    errors,
    fieldData,
    onKeyDown,
    register,
    disableField,
  } = props;
  const renderFormField = (field: any) => {
    const { type } = field;
    switch (type) {
      case FieldType?.textArea:
        return (
          <TextArea
            rows={4}
            placeholder={field?.placeholder}
            required={field?.required}
            name={field?.name}
            register={register}
            disabled={disableField}
            onKeyDown={onKeyDown}
          />
        );
      default:
        return (
          <Input
            placeholder={field?.placeholder}
            register={register}
            name={field?.name}
            customContainerClass={classes.inputField}
          />
        );
    }
  };
  return (
    <div className={classes.form}>
      <InputLabel label={label} isRequired={isRequired} isError={errors} />
      <div className={classes.renderFormField}>
        {renderFormField(fieldData)}
      </div>
      <div className={classes.errorText}>
        <InputError errorMsg={""} />
      </div>
    </div>
  );
};

export default FormFieldWrapper;
