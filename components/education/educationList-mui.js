import React, { useState } from "react";
import { List, ListItem, Divider, Pagination } from "@mui/material";
import EducationItem from "./educationItem";

const itemsPerPage = 3;

const EducationListMui = ({ title, data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (_, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h2>{title}</h2>
      <List>
        {currentItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <EducationItem {...item} />
            </ListItem>
            {index !== currentItems.length - 1 && (
              <Divider variant="inset" component="li" />
            )}
          </React.Fragment>
        ))}
      </List>
      {data.length > itemsPerPage && (
        <Pagination
          count={Math.ceil(data.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          size="large"
        />
      )}
    </div>
  );
};

export default EducationListMui;
