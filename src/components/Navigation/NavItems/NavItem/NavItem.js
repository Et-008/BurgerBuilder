import React from "react";
import { NavLink } from "react-router-dom";
import "./NavItem.css";

let navItem = (props) => (
  <li className="NavItem">
    <NavLink exact to={props.link}>
      {props.children}
    </NavLink>
  </li>
);

export default navItem;
