import React from "react";
import Pagination from "@mui/material/Pagination";
// import Stack from '@mui/material/Stack';

const CoustomPagination = ({ page, setPage,numOfPages=10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
        
      }}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        shape="rounded"
        color="primary"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
};

export default CoustomPagination;
