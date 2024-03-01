import React, { Fragment } from "react";
import classes from "./education.module.css";
import commonStyles from "../../styles/common.module.css";

import EducationList from "./educationList";

const professionalDevelopmentData = [
  {
    logo: "/Udemy-Logo.png",
    institution: "Information Technology University",
    degree: "Bachelor of Science, Computer Science",
    dates: "2018 - 2022",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "Beaconhouse School System",
    degree: "A-Levels",
    dates: "2016 - 2018",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "Beaconhouse School System",
    degree: "GCSE O-Levels",
    dates: "2013 - 2016",
    explanation: "High School",
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
      <div className={classes.educationContainerOne}>
        <EducationList data={professionalDevelopmentData} isPaginated={false} />
      </div>
    </Fragment>
  );
};

export default Education;
