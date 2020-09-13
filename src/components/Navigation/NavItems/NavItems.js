import React from "react";
import NavItem from "./NavItem/NavItem";
import "./NavItems.css";

let navItems = (props) => (
  <ul className="NavItems">
    <NavItem link="/" active>
      Burger Builder
    </NavItem>
    <NavItem link="/">My Orders</NavItem>
  </ul>
);

export default navItems;
