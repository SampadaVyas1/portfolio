import InputLabel from "../input-label";
import { FieldType } from "../../constants/common";
import TextArea from "../text-area";
import Input from "../input";
import classes from "./formFieldWrapper.module.scss";
import InputError from "../inputError";

const FormFieldWrapper = (props: any) => {
  const { label, isRequired, errors, fieldData, setFormData, formData } = props;

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
            value={formData.message}
            onChange={(event: any) =>
              setFormData((prev: any) => ({
                ...prev,
                [field?.name]: event.target.value,
              }))
            }
          />
        );
      default:
        return (
          <Input
            required
            placeholder={field?.placeholder}
            name={field?.name}
            type={field?.name === "name" ? "text" : "email"}
            customContainerClass={classes.inputField}
            value={field?.name === "name" ? formData.name : formData.email}
            onChange={(event) =>
              setFormData((prev: any) => ({
                ...prev,
                [field?.name]: event.target.value,
              }))
            }
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
