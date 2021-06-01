import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const SideBarRight = () => {
  return (
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        position: "sticky",
        top: "35px",
      }}
    >
      <li className="listItemR">Poked</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItemR">
        <FontAwesomeIcon icon={faCoffee} />. Notifications
      </li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItemR">Go</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItemR">Health</li>
      <hr style={{ marginTop: "3px", marginBottom: "3px" }} />
      <li className="listItemR">Food</li>
    </ul>
  );
};

export default SideBarRight;
