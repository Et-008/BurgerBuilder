import React, { Component } from "react";
import axios from "axios";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";

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
    totalPrice: 2.5,
    showOrderSummary: false
  };

  addIngredientHandler = (nameOfIngredient) => {
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
  };

  removeIngredientHandler = (nameOfIngredient) => {
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
  };

  showOrderSummaryHandler = () => {
    this.setState({ showOrderSummary: true });
  };

  cancelOrderHandler = () => {
    this.setState({ showOrderSummary: false });
  };

  continueOrderHandler = () => {
    let order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice
    };
    axios
      .post("https://code-pen-io.firebaseio.com/orders.json", order)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
    this.setState({ showOrderSummary: false });
  };

  render() {
    return (
      <Aux>
        <Backdrop
          show={this.state.showOrderSummary}
          clicked={this.cancelOrderHandler}
        />
        <Modal show={this.state.showOrderSummary}>
          <OrderSummary
            ingredientSummary={this.state.ingredients}
            price={this.state.totalPrice}
            cancelled={this.cancelOrderHandler}
            continue={this.continueOrderHandler}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          price={this.state.totalPrice}
          ingredients={this.state.ingredients}
          addIngredient={this.addIngredientHandler}
          removeIngredient={this.removeIngredientHandler}
          ordered={this.showOrderSummaryHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBulider;
