import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import "./Toolbar.css";

let toolbar = (props) => (
  <header className="Toolbar">
    <div onClick={props.openMenu} className="ToolbarLogo">
      <Logo />
    </div>
    <nav className="Responsive">
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
