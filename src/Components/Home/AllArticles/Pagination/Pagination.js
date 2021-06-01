import React, { useState } from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("pgn", pageNumbers);

  return (
    <div>
      <h6>Paginate</h6>
      <ul className="pagination">
        <li className="page-item">
          <a
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
            href="#"
            className="page-link"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((n) => (
          <li key={n} className="page-item">
            <a onClick={() => paginate(n)} href="#" className="page-link">
              {n}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            onClick={() => {
              if (currentPage < pageNumbers.length) {
                paginate(currentPage + 1);
              }
            }}
            href="#"
            className="page-link"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
