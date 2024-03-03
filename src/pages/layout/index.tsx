import React from "react";
import Header from "../../component/header";
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
import ScrollContextProvider from "../../context/scrollContext";

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
      (value: any) => {
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
        <ScrollContextProvider>
          <CursorPointer />
          <Header />
          <HomeHeroBanner />
          <InfoBanner />
          <OurServices />
          <HireMe />
          <ContactMe />
          <Footer />
        </ScrollContextProvider>
      </MouseContextProvider>
    </div>
  );
};

export default Layout;
