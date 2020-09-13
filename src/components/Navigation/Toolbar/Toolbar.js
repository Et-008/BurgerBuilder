import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import MenuButton from "../Menu/Menu";
import "./Toolbar.css";

let toolbar = (props) => (
  <header className="Toolbar">
    <div className="ResponsiveMenuBtn">
      <MenuButton clicked={props.openMenu} />
    </div>
    <div className="ToolbarLogo">
      <Logo />
    </div>
    <nav className="ResponsiveNav">
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
