import React from "react";
import "./Pagination.css";
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("pgn", pageNumbers);
  return (
    <div>
      <h3>Hello</h3>
      <ul className="pagination">
        {pageNumbers.map((n) => (
          <li key={n} className="page-item">
            <a onClick={() => paginate(n)} href="#" className="page-link">
              {n}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
