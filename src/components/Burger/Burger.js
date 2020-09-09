import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

let burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igntKey) => {
      return [...Array(props.ingredients[igntKey])].map((ignt, i) => {
        return <BurgerIngredient key={igntKey + i} type={igntKey} />;
      });
    })
    .reduce((acc, cur) => {
      return acc.concat(cur);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some Ingredients</p>;
  }
  console.log(transformedIngredients);
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default burger;
