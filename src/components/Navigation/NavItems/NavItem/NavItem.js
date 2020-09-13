import React from "react";
import "./NavItem.css";

let navItem = (props) => (
  <li className="NavItem">
    <a href={props.link} className={props.active ? "active" : null}>
      {props.children}
    </a>
  </li>
);

export default navItem;
