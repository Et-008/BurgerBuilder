import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

let buildControls = (props) => {
  let ingredients = Object.keys(props.ingredients);
  let Controls = ingredients.map((igName) => {
    let noOfIngredient = props.ingredients[igName];
    return (
      <BuildControl
        key={igName}
        IngredientName={igName}
        noOfIngredient={noOfIngredient}
        lessButton={() => props.removeIngredient(igName)}
        moreButton={() => props.addIngredient(igName)}
      />
    );
  });
  return (
    <div className="BuildControls">
      <p className="Price">
        {props.price} <strong>$</strong>
      </p>
      <div>{Controls}</div>
      <button className="OrderButton" disabled={props.price <= 2.5}>
        Order Now
      </button>
    </div>
  );
};

export default buildControls;
