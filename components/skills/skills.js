import React, { Fragment } from "react";
import { Container, Tooltip } from "@mui/material";
import { skillsData } from "../../utility/texts";
import styles from "./skills.module.css";
import commonStyles from "../../styles/common.module.css";

const Skills = () => {
  return (
    <Fragment>
      <h1 className={commonStyles.pageSectionHeading}>
        Software Engineer Spotlight
      </h1>
      <div className={styles.intro}>
        <p>{skillsData.intro}</p>
      </div>
      <Container className={styles.centeredContainer}>
        {skillsData.skills?.map((rows) => (
          <div key={rows.title}>
            <br />
            <h3 className={styles.skillTitle}>{rows.title}</h3>
            {rows.items.map((item) => (
              <div key={item.title} className={styles.skillItem}>
                <Tooltip title={item.title} arrow>
                  <img
                    className={styles.iconStyle}
                    src={item.icon}
                    alt={item.title}
                  />
                </Tooltip>
              </div>
            ))}
          </div>
        ))}
      </Container>
    </Fragment>
  );
};

export default Skills;
