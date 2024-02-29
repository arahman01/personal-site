import React from "react";
import styles from "./educationItem.module.css";
import Image from "next/image";

const EducationItem = ({ logo, institution, degree, dates, explanation }) => {
  return (
    <div className={styles.educationItem}>
      <div className={styles.logo}>
        <Image src={logo} alt="Logo" width={64} height={64} />{" "}
      </div>
      <div className={styles.details}>
        <h3>{institution}</h3>
        <p>{degree}</p>
        <p>{dates}</p>
        <p>{explanation}</p>
      </div>
    </div>
  );
};

export default EducationItem;
