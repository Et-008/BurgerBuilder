import React from "react";
import Aux from "../../../hoc/Aux";
import "./OrderSummary.css";

let orderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredientSummary).map(
    (igntKey) => {
      return (
        <li key={igntKey}>
          <span className="OrderName">{igntKey}</span>{" "}
          <span className="OrderNumber">
            {props.ingredientSummary[igntKey]}
          </span>
        </li>
      );
    }
  );
  return (
    <Aux>
      <h3>Your Order</h3>
      <ul className="Order">
        <li>
          <strong className="OrderName">Ingredient</strong>
          <strong className="OrderNumber">no's</strong>
        </li>
        <p></p>
        {ingredientSummary}
      </ul>
      <p>Continue Order?</p>
      <button onClick={props.cancelled}>Cancel</button>
      <button>Continue</button>
    </Aux>
  );
};

export default orderSummary;
