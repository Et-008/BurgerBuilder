import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import SideDrawerToggle from "../DrawerToggle/DrawerToggle";
import "./Toolbar.css";

let toolbar = (props) => (
  <header className="Toolbar">
    <div className="ResponsiveMenuBtn">
      <SideDrawerToggle clicked={props.toggleSideDrawer} />
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
