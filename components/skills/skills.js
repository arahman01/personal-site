import React from "react";
import { Paper, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import classes from "./skills.module.css";

const Skills = () => {
  return (
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
  );
};

export default Skills;
