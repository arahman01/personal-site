import React, { useState } from "react";
import EducationItem from "./educationItem";
import styles from "./educationList.module.css";

const EducationList = ({ title, isPaginated, pageSize, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = isPaginated ? (pageSize ? pageSize : 3) : data.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className={styles.professionalDevelopment}>
      {" "}
      {title && <h2>{title}</h2>}
      {currentItems.map((item, index) => (
        <React.Fragment key={index}>
          <EducationItem {...item} />
          {index !== currentItems.length - 1 && (
            <hr className={styles.divider} />
          )}
        </React.Fragment>
      ))}
      {isPaginated && data.length > itemsPerPage && (
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
