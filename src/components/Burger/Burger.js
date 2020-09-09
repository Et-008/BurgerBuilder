import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

let burger = (props) => {
  console.log(props.ingredients["meat"]);
  let transformedIngredients = Object.keys(props.ingredients).map((igntKey) => {
    return [...Array(props.ingredients[igntKey])].map((ignt, i) => {
      return <BurgerIngredient key={i} type={igntKey} />;
    });
  });
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
