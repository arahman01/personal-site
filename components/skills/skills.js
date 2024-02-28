import React, { Fragment } from "react";
import { Paper, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import classes from "./skills.module.css";
import commonStyles from "../../styles/common.module.css";

const Skills = () => {
  return (
    <Fragment>
      <h1 className={commonStyles.pageSectionHeading}>
        Software Engineer Spotlight
      </h1>
      <Paper elevation={3} className={classes.section}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <div className={classes.skill}>
          <Code />
          <Typography variant="body1">
            Proficient in JavaScript, React, HTML, CSS
          </Typography>
        </div>
        <div className={classes.skill}>
          <Code />
          <Typography variant="body1">
            Familiar with Node.js, Express.js, MongoDB
          </Typography>
        </div>
        {/* Add more skills as needed */}
      </Paper>
    </Fragment>
  );
};

export default Skills;
