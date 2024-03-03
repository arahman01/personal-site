import React, { Fragment, useState } from "react";
import classes from "./education.module.css";
import commonStyles from "../../styles/common.module.css";
import Modal from "../modal/modal";
import EducationList from "./educationList";
import {
  formalEducationData,
  coursesAndCertificatesData,
  educationSectionQuote,
  educationModaldescription,
} from "../../utility/texts";

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
          {educationSectionQuote}
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
          <h3>{educationModaldescription}</h3>
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
