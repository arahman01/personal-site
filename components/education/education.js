import React, { Fragment } from "react";
import classes from "./education.module.css";
import commonStyles from "../../styles/common.module.css";

import EducationList from "./educationList";

const professionalDevelopmentData = [
  {
    logo: "/Udemy-Logo.png",
    institution: "Udemy",
    degree: "Item 1",
    dates: "2021",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    certificateLink: "https://www.udemy.com/certificate/UC-1234567890/",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "Udemy",
    degree: "Item 2",
    dates: "2021",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    certificateLink: "https://www.udemy.com/certificate/UC-1234567890/",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "Item 3",
    degree: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    dates: "2021",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    certificateLink: "https://www.udemy.com/certificate/UC-1234567890/",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "Item 4",
    degree: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    dates: "2021",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    certificateLink: "https://www.udemy.com/certificate/UC-1234567890/",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "Item 5",
    degree: "React - The Complete Guide (incl Hooks, React Router, Redux)",
    dates: "2021",
    explanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    certificateLink: "https://www.udemy.com/certificate/UC-1234567890/",
  },
];

const Education = () => {
  return (
    <Fragment>
      <h1 className={commonStyles.pageSectionHeading}>Education</h1>
      <div className={classes.education}>
        <blockquote className={classes.quote}>
          <span
            className={`${classes.quotationMark} ${classes.leftQuotationMark}`}
          >
            “
          </span>
          Learning is a treasure that will follow its owner everywhere
          <span
            className={`${classes.quotationMark} ${classes.rightQuotationMark}`}
          >
            ”
          </span>
        </blockquote>
      </div>
      <div className={classes.professionalDevelopmentContainer}>
        <EducationList
          title="Professional Development"
          data={professionalDevelopmentData}
        />
      </div>
    </Fragment>
  );
};

export default Education;
