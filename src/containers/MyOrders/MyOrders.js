import React, { Component } from "react";
import "./MyOrders.css";

class MyOrders extends Component {
  render() {
    return (
      <div className="MyOrders">
        <h1>My Orders</h1>
        <div className="OrderList">
          <div className="Order">
            <h3>
              1st Order <span className="OrderDate">11/11/2011</span>
            </h3>
            <ul>
              <li>Salad: 1</li>
              <li>Salad: 1</li>
              <li>Salad: 1</li>
              <li>Salad: 1</li>
            </ul>
            <p>
              Total Price <span className=""></span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyOrders;
