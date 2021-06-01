import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
const Article = ({
  id,
  title,
  subTitle,
  blogCover,
  article,
  authorName,
  likes,
}) => {
  return (
    <div>
      <img
        style={{ width: "100%", borderRadius: "5px" }}
        src={blogCover}
        alt=""
      />

      <div className="row">
        <div style={{ textAlign: "left" }} className="col-6">
          <h2>{title}</h2>
        </div>
        <div style={{ textAlign: "right" }} className="col-6">
          <h3>{subTitle}</h3>
        </div>
      </div>
      <h4 style={{ textAlign: "justify", textJustify: "inter-word" }}>
        {article}
      </h4>
      <div
        style={{ margin: "0px", borderRadius: "5px" }}
        className="row bg-light"
      >
        <div
          style={{ textAlign: "left", borderRight: "1px solid black" }}
          className="col-4 bottomBar"
        >
          <span>
            <FontAwesomeIcon icon={faThumbsUp} />
            Like{likes}
          </span>
        </div>
        <div style={{ textAlign: "center" }} className="col-4 bottomBar">
          <h6>Comments</h6>
        </div>
        <div
          style={{ textAlign: "right", borderLeft: "1px solid black" }}
          className="col-4 bottomBar"
        >
          <h6>{authorName}</h6>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Article;
