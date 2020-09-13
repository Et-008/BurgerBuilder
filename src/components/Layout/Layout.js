import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import "./Layout.css";

let layout = (props) => (
  <Aux>
    <Toolbar />
    <main className="Content">{props.children}</main>
  </Aux>
);

export default layout;
