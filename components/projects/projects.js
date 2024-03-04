import React from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Container,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import {
  githubLink,
  projectSectionDescription,
  projects,
} from "../../utility/texts";
import styles from "./projects.module.css";
import commonStyles from "../../styles/common.module.css";

const Projects = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMoreProjectsClick = () => {
    window.open(githubLink, "_blank");
  };

  const handleProjectExploreClick = (project) => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <section className={styles.latest}>
      <h2 className={commonStyles.pageSectionHeading}>Projects</h2>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
            color: `var(--color-grey-50)`,
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {projectSectionDescription}
        </Typography>
      </Container>
      <Grid container justify="center" sx={{ marginBottom: "0" }}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
            <Card
              sx={{
                maxWidth: "350px",
                margin: "1rem auto",
                marginBottom: isSmallScreen ? "1rem" : "0",
                color: `var(--color-grey-50)`,
                backgroundColor: `var(--color-grey-700)`,
                "&:hover": {
                  boxShadow: " 0 8px 8px var(--color-primary-010)",
                },
              }}
            >
              <CardActionArea>
                <CardContent>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="large"
                  sx={{ color: "var(--color-primary-010)" }}
                  onClick={() => handleProjectExploreClick(project)}
                >
                  Explore
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <div className={commonStyles.sectionButtonDiv}>
        <button onClick={handleMoreProjectsClick}>More Projects</button>
      </div>
    </section>
  );
};

export default Projects;
