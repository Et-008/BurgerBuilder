import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import "./BuildControls.css";

let buildControls = (props) => {
  let ingredients = Object.keys(props.ingredients);
  let Controls = ingredients.map((igName) => {
    return <BuildControl key={igName} IngredientName={igName} />;
  });
  return <div className="BuildControls">{Controls}</div>;
};

export default buildControls;
