import React, { Fragment, useState } from "react";
import classes from "./heroBanner.module.scss";
import TiltCardComponent from "../tilt-card/index";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
const HeroBanner = () => {
  const handleGithub = () => {
    window.open(
      "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
    );
  };
  return (
    <Fragment>
      <div className={classes.heroBannerContainer}>
        <div className={classes.imageContainer}>
          <div
            className={`${classes.imageWrapper} ${classes.image2}`}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              )
            }
          >
            <BsGithub />
          </div>
          <div
            className={`${classes.imageWrapper} ${classes.image3}`}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
              )
            }
          >
            <AiFillLinkedin className={classes.linkdin} />
          </div>
        </div>
      </div>
      <div className={classes.description}>;fdkvrelkk</div>
    </Fragment>
  );
};

export default HeroBanner;
