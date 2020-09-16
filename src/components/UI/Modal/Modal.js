import React from "react";
import "./Modal.css";

let modal = (props) => {
  let modalClass = ["Modal", "Closed"];
  if (props.show) {
    modalClass = ["Modal"];
  }
  return <div className={modalClass.join(" ")}>{props.children}</div>;
};

export default React.memo(modal, function areEqual(prevState, nextState) {
  return prevState.show === nextState.show;
});
