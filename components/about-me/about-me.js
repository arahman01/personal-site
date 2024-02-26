import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { School, Code } from "@mui/icons-material";
import classes from "./about-me.module.css";
import Skills from "./skills";
import Education from "./education";

const AboutMe = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Skills />
      </Grid>
      <Grid item xs={12}>
        <Education />
      </Grid>
    </Grid>
  );
};

export default AboutMe;
