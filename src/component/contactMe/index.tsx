import React from "react";
import ContactUs from "../../component/contact-us";
import {
  CONTACT_US_SIDE_FORM_FIELDS,
  CONTACT_US_SIDE_FORM_INITIAL_VALUES,
  CONTACT_US_SIDE_FORM_SCHEMA,
} from "../../pages/layout";
import classes from "./contactMe.module.scss";

const contactMeData = [
  {
    img: "https://static.vecteezy.com/system/resources/previews/006/624/453/non_2x/smartphone-icon-design-phone-symbol-free-vector.jpg",
    text: "Call Me On",
    ans: "+91 9359 673 461",
  },
  {
    img: "https://banner2.cleanpng.com/20180718/twz/kisspng-computer-icons-stock-photography-email-clip-art-simblo-5b4faed2d78991.2976490215319487548829.jpg",
    text: "Email Me At",
    ans: "sampadavyas1@gmail.com",
  },
];

const ContactMe = () => {
  return (
    <div id="ContactUs">
      <div className={classes.contactWrapper}>
        <div className={classes.contactMeTitle}>Contact Me</div>
        <div className={classes.desc}>
          Let's Connect! Reach out for collaborations, inquiries, or just to say
          hello. I'm here and ready to hear from you!
        </div>
        <div className={classes.contactMedia}>
          {contactMeData.map((element) => {
            return (
              <div className={classes.contentData}>
                <img src={element.img} alt="" className={classes.image} />
                <div className={classes.description}>
                  <div className={classes.contactitle}>{element.text}</div>
                  <div className={classes.ans}>{element.ans}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <ContactUs
        schema={CONTACT_US_SIDE_FORM_SCHEMA}
        formFields={CONTACT_US_SIDE_FORM_FIELDS}
        initialValue={CONTACT_US_SIDE_FORM_INITIAL_VALUES}
      />
    </div>
  );
};

export default ContactMe;
