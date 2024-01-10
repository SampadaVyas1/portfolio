import React from "react";
import Header from "../../component/header";
import Grid from "../../component/grid";
import classes from "./layout.module.scss";
import HeroBanner from "../../component/heroBanner";
import InfoBanner from "../../component/infoBanner";
import * as yup from "yup";
import { FieldType } from "../../constants/common";
import MouseContextProvider from "../../mouseContext/mouseContext";
import CursorPointer from "../../component/cursor-pointer";
import HomeHeroBanner from "../../component/homeHeroBanner";
import Footer from "../../component/footer";
import OurServices from "../../component/ourServices";
import HireMe from "../../component/hireMe";
import ContactMe from "../../component/contactMe";

export const CONTACT_US_SIDE_FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  message: "",
};
export const CONTACT_US_SIDE_FORM_SCHEMA = yup.object({
  name: yup
    .string()
    .required("Name is required")
    .matches(
      /^[^0-9]+$/,
      "Invalid input.use Only aolhebtic chracyers ad try again"
    )
    .matches(
      /^([A-Za-z'-]+ )+[A-Za-z'-]+$|^[A-Za-z'-]+$/,
      "Only single space is allowed"
    )
    .matches(
      /^[a-zA-Z\s'-]+$/,
      "Only letters, spaces, hyphens, and apostrophes are allowed"
    )
    .matches(/^[^@#$%^&*!]+$/, "Names should not include special symbols")
    .test(
      "no-leading-trailing-spaces",
      "Name should not have leading or trailing spaces",
      (value) => {
        if (value) {
          return value.trim() === value;
        }
        return true;
      }
    )
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must not exceed 50 characters"),

  email: yup
    .string()
    .required("email address is required")
    .email("Enter a valid email address")
    .matches(
      /^[a-z0-9_.+-]+@[a-z.-]+\.[a-z]{2,}$/,
      "Enter a valid email address."
    )
    .min(3, "Email address mujst be at least 3 characters long")
    .max(320, "Email address must not exceed 320 characters")
    .matches(/^\S+$/, "Email address should not contain spaces")
    .matches(
      /^[\w.%+-]+@[\w.-]+$/,
      "Email address should not contain most special characters"
    ),
  message: yup
    .string()
    .matches(/.{1,}/, {
      excludeEmptyString: true,
      message: "Message must be at least 1 character long",
    })
    .notRequired()
    .test(
      "test-ctype",
      "Please enter at least 120 characters.",
      (value: any) => {
        if (value.length != 0 && value?.length < 120) {
          return false;
        } else {
          return true;
        }
      }
    )
    .test(
      "test-ctype",
      "Message must not exceed 1000 characters",
      (value: any) => {
        if (value?.length != 0 && value?.length > 1000) {
          return false;
        } else {
          return true;
        }
      }
    ),
});

export const CONTACT_US_SIDE_FORM_FIELDS = [
  {
    id: 1,
    type: FieldType.text,
    label: "name",
    placeholder: "Enter your name",
    name: "name",
    isRequired: true,
  },
  {
    id: 2,
    type: FieldType.email,
    label: "Email",
    placeholder: "Enter your email",
    name: "email",
    isRequired: true,
  },
  {
    id: 3,
    type: FieldType.textArea,
    label: "Message",
    placeholder: "Enter your Message",
    name: "message",
    isRequired: false,
    maxLengt: 120,
  },
];

const Layout = () => {
  return (
    <div>
      <MouseContextProvider>
        <CursorPointer />
        <Grid container className={classes.gridItem}>
          <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
            <Header />
          </Grid>
          <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
            {/* <InfoBanner /> */}
            <HomeHeroBanner />
          </Grid>
          <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
            <InfoBanner />
          </Grid>
          <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
            <OurServices />
          </Grid>
          <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
            <HireMe />
          </Grid>
          <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
            <ContactMe />
          </Grid>
          <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
            <Footer />
          </Grid>
          {/* <Grid item sm={4} lg={12} md={8} className={classes.gridItem}>
          <HeroBanner />
        </Grid> */}
        </Grid>
      </MouseContextProvider>
    </div>
  );
};

export default Layout;
