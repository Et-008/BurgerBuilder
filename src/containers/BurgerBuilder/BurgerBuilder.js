import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

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
      cheese: 0.3,
      meat: 0.8
    },
    totalPrice: 2.5
  };

  addIngredientHandler(nameOfIngredient) {
    let currentIngredients = this.state.ingredients;
    let currentPrice = this.state.totalPrice;
    currentIngredients[nameOfIngredient] += 1;
    let latestPrice =
      currentPrice + this.state.ingredientsPrice[nameOfIngredient];
    latestPrice = Math.round(latestPrice * 1000) / 1000;
    this.setState({
      ingredients: currentIngredients,
      totalPrice: latestPrice
    });
  }

  removeIngredientHandler(nameOfIngredient) {
    let currentIngredients = this.state.ingredients;
    let currentPrice = this.state.totalPrice;
    currentIngredients[nameOfIngredient] -= 1;
    let latestPrice =
      currentPrice - this.state.ingredientsPrice[nameOfIngredient];
    latestPrice = Math.round(latestPrice * 1000) / 1000;
    this.setState({
      ingredients: currentIngredients,
      totalPrice: latestPrice
    });
  }

  render() {
    return (
      <Aux>
        <Modal>
          <OrderSummary ingredientSummary={this.state.ingredients} />
        </Modal>
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
