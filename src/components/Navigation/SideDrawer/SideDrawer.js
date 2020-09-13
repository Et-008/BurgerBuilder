import React from "react";
import NavItems from "../NavItems/NavItems";
import Logo from "../../Logo/Logo";
import Aux from "../../../hoc/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import "./SideDrawer.css";

let sideDrawer = (props) => {
  let classes = ["SideDrawer", "Hide"];
  if (props.show) {
    classes = ["SideDrawer", "Show"];
  }
  return (
    <Aux>
      <div className={classes.join(" ")}>
        <div className="SideDrawerLogo">
          <Logo />
        </div>
        <NavItems />
      </div>
      <div className="SideDrawerBackdrop">
        <Backdrop show={props.show} clicked={props.closeMenu} />
      </div>
    </Aux>
  );
};
export default sideDrawer;
