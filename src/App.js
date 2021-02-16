import React from "react";
import { Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import MyOrders from "./containers/MyOrders/MyOrders";

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/myorders" exact component={MyOrders} />
      </Layout>
    );
  }
}

export default App;
