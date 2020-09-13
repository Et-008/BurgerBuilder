import React from "react";
import LogoImage from "../../assets/Logo/burger-logo.png";
import "./Logo.css";

let logo = (props) => (
  <div className="Logo">
    <img alt="MyBurger" src={LogoImage} />
  </div>
);

export default logo;
