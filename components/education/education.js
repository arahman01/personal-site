import React from "react";
import { Paper, Typography } from "@mui/material";
import classes from "./education.module.css";

const Education = () => {
  return (
    <Paper elevation={3} className={classes.section}>
      <Typography variant="h5" gutterBottom>
        Education
      </Typography>
      <Paper elevation={0} className={classes.education}>
        <Typography variant="body1">
          Bachelor of Science in Computer Science - Your University (Year)
        </Typography>
      </Paper>
      <Paper elevation={0} className={classes.education}>
        <Typography variant="body1">
          Certifications in Web Development - Issuing Organization (Year)
        </Typography>
      </Paper>
      {/* Add more education details as needed */}
    </Paper>
  );
};

export default Education;
