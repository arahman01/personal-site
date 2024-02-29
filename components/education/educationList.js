import React, { useState } from "react";
import EducationItem from "./educationItem";
import styles from "./educationList.module.css";

const itemsPerPage = 3;

const EducationList = ({ title, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.professionalDevelopment}>
      {" "}
      {/* <h2>{title}</h2> */}
      {currentItems.map((item, index) => (
        <React.Fragment key={index}>
          <EducationItem {...item} />
          {index !== currentItems.length - 1 && (
            <hr className={styles.divider} />
          )}
        </React.Fragment>
      ))}
      {data.length > itemsPerPage && (
        <div className={styles.pagination}>
          {" "}
          <ul className={styles.paginationList}>
            {" "}
            {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map(
              (_, index) => (
                <li
                  key={index}
                  className={`${styles.pageNumber} ${
                    currentPage === index + 1 ? styles.active : ""
                  }`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EducationList;
