import React from "react";
import "./Button.css";

let button = (props) => {
  let type = ["Button", props.btnType];
  return (
    <button className={type.join(" ")} onClick={props.clicked}>
      {props.children}
    </button>
  );
};

export default button;
