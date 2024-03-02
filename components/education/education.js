import React, { Fragment, useState } from "react";
import classes from "./education.module.css";
import commonStyles from "../../styles/common.module.css";
import Modal from "../modal/modal";
import EducationList from "./educationList";

const formalEducationData = [
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

const coursesAndCertificatesData = [
  {
    logo: "/Udemy-Logo.png",
    institution: "random1",
    degree: "course 1",
    dates: "2018 - 2022",
    certificateLink: " ",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "snfjn fjsdnfl",
    degree: "dnflgjkbskf",
    dates: "2016 - 2018",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "dsgfnf sdjnbfjofn fdas f",
    degree: "dfngjsodbniof",
    dates: "2013 - 2016",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "random1",
    degree: "course 123",
    dates: "2018 - 2022",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "sabc sdnfl",
    degree: "dnflgjkbskf",
    dates: "2016 - 2018",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "dsgfjofn fdas f",
    degree: "dfngjsodbniof",
    dates: "2013 - 2016",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "random1",
    degree: "course 1",
    dates: "2018 - 2022",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "snfbf dnfl",
    degree: "dfjdeb f",
    dates: "2016 - 2018",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "ds32845rsdbf ofn fdas f",
    degree: "dfngjsodbniof",
    dates: "2013 - 2016",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "random193845u",
    degree: "course ejfb1",
    dates: "2018 - 2022",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "snfjn fjsdnfl",
    degree: "dnqqqbskf",
    dates: "2016 - 2018",
    explanation: "High School",
  },
  {
    logo: "/Udemy-Logo.png",
    institution: "jenbtljbdgfls f",
    degree: "dfngjsodefnj ajbrdbniof",
    dates: "2013 - 2016",
    explanation: "High School",
  },
];

const Education = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      <div className={classes.container}>
        <div className={classes.flexContainer}>
          <div className={classes.educationContainerOne}>
            <EducationList data={formalEducationData} isPaginated={false} />
          </div>
          <div className={classes.modalButton}>
            <button onClick={openModal}>Courses & Certificates</button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        modalContentStyle={classes.modal}
      >
        <div className={classes.modalHeadings}>
          <h2>Courses & Certificates</h2>
          <h3>
            In my quest for growth, I regularly pursue courses and
            certifications to enhance my professional skills
          </h3>
        </div>
        <div className={classes.modalList}>
          <EducationList
            data={coursesAndCertificatesData}
            isPaginated={true}
            pageSize={3}
          />
        </div>
      </Modal>
    </Fragment>
  );
};

export default Education;
