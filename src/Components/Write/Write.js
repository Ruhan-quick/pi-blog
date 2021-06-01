import React from "react";
import NavBar from "../Header/NavBar";
import BlogForm from "./BlogForm";

const Write = () => {
  console.log("this is writing");
  return (
    <div>
      <NavBar></NavBar>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 col-md-8">
            <h1>Create and Post</h1>
            <BlogForm></BlogForm>
          </div>
          <div className="col-lg-6 col-sm-12 col-md-4">
            <div className="image">
              <img
                src="https://image.freepik.com/free-vector/content-author-writer-job-concept_74855-7064.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
