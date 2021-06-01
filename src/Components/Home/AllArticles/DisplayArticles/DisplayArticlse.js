import React from "react";
import Article from "../../Article/Article";
import SideBar from "../../SideBar/SideBar";
import SideBarRight from "../../SideBarRight/SideBarRight";

const DisplayArticlse = ({ allBlogs }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2 col-sm-12">
          <SideBar className="sidebarSticky"></SideBar>
        </div>
        <div className="col-lg-7 col-md-8 col-sm-12">
          {allBlogs.map((bg) => (
            <Article
              key={bg._id}
              id={bg._id}
              title={bg.title}
              subTitle={bg.subTitle}
              article={bg.article}
              blogCover={bg.blogCover}
              authorName={bg.authorName}
              likes={bg.likes}
            ></Article>
          ))}
        </div>
        <div className="col-lg-2 col-md-2 col-sm-12">
          <SideBarRight></SideBarRight>
        </div>
      </div>
    </div>
  );
};

export default DisplayArticlse;
