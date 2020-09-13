import React from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import "./Toolbar.css";

let toolbar = () => (
  <header className="Toolbar">
    <div>Menu</div>
    <Logo />
    <nav>
      <NavItems />
    </nav>
  </header>
);

export default toolbar;
