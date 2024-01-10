import React from "react";
import classes from "./ourServices.module.scss";
import TiltCardComponent from "../tilt-card/index";
const ourServicesData = [
  {
    img: "data:image/png;base64,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",
    text: "App Development",
    desc: "Crafting Innovative Solutions for Mobile Platforms",
  },
  {
    img: "https://cdn5.vectorstock.com/i/1000x1000/06/89/web-development-icon-vector-21010689.jpg",
    text: "Web Designing / Development",
    desc: "Where Imagination Meets Implementation.",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/4387/4387430.png",
    text: "Responsive Design and Cross-Browser Compatibility",
    desc: "Crafting seamless experiences, anywhere, everywhere.",
  },
  {
    img: "https://media.istockphoto.com/id/1474388917/vector/problem-solving-icon-in-vector-logotype.jpg?s=612x612&w=0&k=20&c=A-oe2RDgXxez48AGk2dSLDsgn0JkCsBKqEnLB3RVtxA=",
    text: "Problem-Solving and Debugging",
    desc: "Turning Bugs into Features",
  },
  {
    img: "https://png.pngtree.com/png-clipart/20200224/original/pngtree-gear-optimization-performance-seo-icon-for-web-png-image_5225633.jpg",
    text: "Understanding of Web Performance and Optimization",
    desc: "Maximizing website speed and efficiency through performance optimization expertise.",
  },
  {
    img: "https://w7.pngwing.com/pngs/651/927/png-transparent-git-repository-version-control-commit-bitbucket-github-angle-git-repository-thumbnail.png",
    text: "Version Control Systems",
    desc: "Version Control Systems: Safeguarding Progress, One Line at a Time",
  },
];
const OurServices = () => {
  return (
    <div className={classes.container}>
      <div className={classes.ourServicesTitle}>Our Services</div>
      <div className={classes.ourservicesList}>
        {ourServicesData.map((element) => {
          return (
            <TiltCardComponent>
              <div className={classes.ourServicesData}>
                <img
                  src={element.img}
                  alt=""
                  height={50}
                  width={50}
                  className={classes.imageIcon}
                />
                <div className={classes.title}>{element.text}</div>
                <div className={classes.desc}>{element.desc}</div>
              </div>
            </TiltCardComponent>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
