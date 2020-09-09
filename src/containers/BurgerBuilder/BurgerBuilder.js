import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";

class BurgerBulider extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    ingredientsPrice: {
      salad: 0.15,
      bacon: 0.5,
      cheese: 0.2,
      meat: 0.8
    },
    totalPrice: 2.5
  };

  addIngredientHandler(nameOfIngredient) {
    let currentIngredients = this.state.ingredients;
    let currentPrice = this.state.totalPrice;
    currentIngredients[nameOfIngredient] += 1;
    currentPrice += this.state.ingredientsPrice[nameOfIngredient];
    this.setState({
      ingredients: currentIngredients,
      totalPrice: currentPrice
    });
  }

  removeIngredientHandler(nameOfIngredient) {
    let currentIngredients = this.state.ingredients;
    let currentPrice = this.state.totalPrice;
    currentIngredients[nameOfIngredient] -= 1;
    currentPrice -= this.state.ingredientsPrice[nameOfIngredient];
    this.setState({
      ingredients: currentIngredients,
      totalPrice: currentPrice
    });
  }

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler.bind(this)}
          removeIngredient={this.removeIngredientHandler.bind(this)}
        />
      </Aux>
    );
  }
}

export default BurgerBulider;
