import React, { Fragment, useRef, useState } from "react";
import Grid from "../grid";
import classes from "./contact-us.module.scss";
import FormFieldWrapper from "../formFieldWrapper";
import Button from "../button";
import emailjs from "@emailjs/browser";

const ContactUs = (props: any) => {
  const { schema, formFields } = props;
  const initialValue = {
    name: "",
    message: "",
    email: "",
  };
  const form = useRef<null>();
  const [formData, setFormData] = useState<any>(initialValue);

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    console.log(formData);

    setFormData(initialValue);

    const customForm = document.createElement("form");

    Object.entries(formData).forEach(([key, value]) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      // @ts-ignore
      input.value = value;
      customForm.appendChild(input);
    });

    console.log(customForm);
    // Add the form to the document body (or any other container)
    // document.body.appendChild(customForm);

    emailjs
      .sendForm(
        "service_iat30t3",
        "template_ba40yo7",
        // @ts-ignore
        // form.current,
        customForm,
        "zMs6qhtJsA0UALAwV"
      )
      .then(
        (result) => {
          console.log("success");
        },
        (error) => {
          console.log("fail");
        }
      );
  };

  return (
    <Fragment>
      <div className={classes.formWrapper} id="ContactUs">
        <Grid item sm={4} md={4} lg={6} className={classes.imageWrapper}>
          <div className={classes.leftSection}></div>
        </Grid>
        <Grid item sm={4} lg={4} md={6} className={classes.gridContainer}>
          <div className={classes.form}>
            {/* @ts-ignore */}
            <form ref={form} onSubmit={handleSubmitForm} autoComplete="off">
              <div className={classes.formInputs}>
                {formFields.map((item: any, index: number) => {
                  return (
                    <div key={index}>
                      <FormFieldWrapper
                        fieldData={item}
                        setFormData={setFormData}
                        formData={formData}
                      />
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
