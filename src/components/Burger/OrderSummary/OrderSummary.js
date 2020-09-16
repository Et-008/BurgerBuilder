import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
import "./OrderSummary.css";

let OrderSummary = (props) => {
  let ingredientSummary = Object.keys(props.ingredientSummary).map(
    (igntKey) => {
      return props.ingredientSummary[igntKey] ? (
        <li key={igntKey}>
          <span className="OrderName">{igntKey}</span>{" "}
          <span className="OrderValue">{props.ingredientSummary[igntKey]}</span>
        </li>
      ) : null;
    }
  );
  return (
    <Aux className="OrderSummary">
      <h3>Your Order</h3>
      <ul className="Order">
        <li>
          <strong className="OrderName">Ingredient</strong>
          <strong className="OrderValue">no's</strong>
        </li>
        <p></p>
        {ingredientSummary}
        <li>
          <hr />
          <span className="OrderName">Total Price:</span>{" "}
          <strong className="OrderValue">$ {props.price}</strong>
        </li>
      </ul>
      <Button btnType={"Danger"} clicked={props.cancelled}>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked={props.continue}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
