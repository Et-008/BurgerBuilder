import React from "react";
import "./BuildControl.css";

let buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="NameOfIngredient">{props.IngredientName}</div>
      <button className="Less">LESS</button>
      <button className="More">MORE</button>
    </div>
  );
};

export default buildControl;
