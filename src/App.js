import React from "react";
import Aux from "../hoc/Aux";
import BurgerBuilder from "../components/BurgerBuilder";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Aux>
        <div>ToolBar</div>
        <div>SideDrawer</div>
        <BurgerBuilder />
      </Aux>
    );
  }
}

export default App;
