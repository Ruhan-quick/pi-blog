import React from "react";

const SideBar = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        position: "sticky",
        top: "35px",
      }}
    >
      <li className="listItem">All</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItem">News</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItem">Tech</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItem">Health</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItem">Food</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItem">Other</li>
    </ul>
  );
};

export default SideBar;
