import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import "./Layout.css";

class Layout extends React.Component {
  state = {
    showSideDrawer: false
  };
  toggleSideDrawer = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.toggleSideDrawer} />
        <SideDrawer
          show={this.state.showSideDrawer}
          closeMenu={this.toggleSideDrawer}
        />
        <main className="Content">{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
