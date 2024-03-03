import React, { Fragment } from "react";
import { Typography, Paper } from "@mui/material";

import { experiences } from "../../utility/texts";
import styles from "./experience.module.css";
import commonStyles from "../../styles/common.module.css";

function Experience(props) {
  return (
    <Fragment>
      <h1 className={commonStyles.pageSectionHeading}>Experience</h1>
      <Paper elevation={0} className={styles.root}>
        {experiences.map((experience, index) => (
          <div key={index} className={styles.experienceContainer}>
            <div className={styles.experience}>
              <Typography variant="h6" className={styles.fontStyles}>
                {experience.title}
              </Typography>
              <Typography variant="subtitle1" className={styles.fontStyles}>
                {experience.company}
              </Typography>
              <Typography variant="subtitle2" className={styles.fontStyles}>
                {experience.duration}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                className={styles.fontStyles}
              >
                <ul>
                  {experience.description.split("\n").map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </Typography>
            </div>
          </div>
        ))}
      </Paper>
    </Fragment>
  );
}

export default Experience;
