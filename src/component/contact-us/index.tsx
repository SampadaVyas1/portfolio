import React, { Fragment } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "../grid";
import classes from "./contact-us.module.scss";
import FormFieldWrapper from "../formFieldWrapper";
import Button from "../button";

const ContactUs = (props: any) => {
  const { initialValue, schema, formFields } = props;
  const { register, handleSubmit, setValue, watch, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });
  const handleSubmitForm = () => {};

  return (
    <Fragment>
      <div className={classes.formWrapper}>
        <Grid item sm={4} md={4} lg={6} className={classes.imageWrapper}>
          <div className={classes.leftSection}>
            {/* <img
              src="https://www.wikihow.com/images/2/22/Make-a-Cartoon-Step-21-Version-3.jpg"
              alt=""
              width={400}
              height={200}
            /> */}
          </div>
        </Grid>
        <Grid item sm={4} lg={4} md={6} className={classes.gridContainer}>
          <div className={classes.form}>
            <form onSubmit={handleSubmit(handleSubmitForm)} autoComplete="off">
              <div className={classes.formInputs}>
                {formFields.map((item: any, index: number) => {
                  return (
                    <div key={index}>
                      <FormFieldWrapper fieldData={item} />
                    </div>
                  );
                })}
              </div>
              <div className={classes.submit}>
                <Button customStyle={classes.submitButton}>Submit</Button>
              </div>
            </form>
          </div>
        </Grid>
      </div>
    </Fragment>
  );
};

export default ContactUs;
