import React from "react";
import "./DrawerToggle.css";

let drawerToggle = (props) => (
  <div onClick={props.clicked} className="DrawerToggle">
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
