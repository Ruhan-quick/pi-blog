import React, { useEffect, useState } from "react";
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
    fetch("http://localhost:5055/showBlogs")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, []);
  console.log("here", allBlogs);
  //post rout calculation
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentArticles = allBlogs.slice(indexOfFirstPost, indexOfLastPost);

  //change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <DisplayArticlse allBlogs={currentArticles} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allBlogs.length}
        paginate={paginate}
        style={{ textAlign: "center" }}
      ></Pagination>
    </div>
  );
};

export default AllArticles;
