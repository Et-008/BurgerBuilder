import React from "react";
import "./Modal.css";

let modal = (props) => {
  let modalClass = ["Modal", "Closed"];
  if (props.show) {
    modalClass = ["Modal"];
  }
  return <div className={modalClass.join(" ")}>{props.children}</div>;
};

export default modal;
