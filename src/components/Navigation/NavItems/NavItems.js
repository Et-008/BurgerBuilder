import React from "react";
import NavItem from "./NavItem/NavItem";
import "./NavItems.css";

let navItems = (props) => (
  <ul className="NavItems">
    <NavItem link="/">Burger Builder</NavItem>
    <NavItem link="/myorders">My Orders</NavItem>
  </ul>
);

export default navItems;
