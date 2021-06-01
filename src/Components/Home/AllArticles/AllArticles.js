import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Article from "../Article/Article";
import SideBar from "../SideBar/SideBar";
import SideBarRight from "../SideBarRight/SideBarRight";
import "./AllArticle.css";
import DisplayArticlse from "./DisplayArticles/DisplayArticlse";
import Pagination from "./Pagination/Pagination";
const AllArticles = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(3);

  useEffect(() => {
    fetch("https://guarded-stream-40071.herokuapp.com/showBlogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, []);
  console.log("here", allBlogs);
  //post rout calculation
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticles = allBlogs.slice(indexOfFirstPost, indexOfLastPost);

  //
  const handlePageNumber = () => {
    const pp = document.getElementById("postPerPage").value;
    setPostPerPage(pp);
    console.log(postsPerPage);
    paginate(1);
  };
  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <DisplayArticlse allBlogs={currentArticles} />

      <div className="flex-style container">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={allBlogs.length}
          paginate={paginate}
          currentPage={currentPage}
          style={{ textAlign: "center" }}
        ></Pagination>
        <Form style={{ marginLeft: "15px" }}>
          <Form.Group>
            <Form.Label>Post Per Page</Form.Label>
            <Form.Control
              onChange={() => handlePageNumber()}
              id="postPerPage"
              as="select"
            >
              <option>2</option>
              <option>3</option>
              <option>5</option>
              <option>10</option>
              <option>20</option>
              <option>30</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default AllArticles;
