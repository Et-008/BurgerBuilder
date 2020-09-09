import React from "react";
import "./BuildControl.css";

let buildControl = (props) => {
  return (
    <div className="BuildControl">
      <div className="NameOfIngredient">{props.IngredientName}</div>
      <button
        className="Less"
        onClick={props.lessButton}
        disabled={!props.noOfIngredient}
      >
        LESS
      </button>
      <button className="More" onClick={props.moreButton}>
        MORE
      </button>
    </div>
  );
};

export default buildControl;
