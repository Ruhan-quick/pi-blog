import React from "react";
import Header from "../Header/Header";
import AllArticles from "./AllArticles/AllArticles";
//import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <hr
        style={{
          top: 0,
          position: "sticky",
          backgroundColor: "red",
          padding: "10px",
          zIndex: 2,
        }}
      />
      <AllArticles></AllArticles>
    </div>
  );
};

export default Home;
