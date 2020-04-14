import React, { Component } from 'react';

import Burger from "../../components/Burger/Burger";
import BuilderControls from "../../components/BuilderControls/BuilderControls";
import Modal from "../../components/UI/Modal/Modal";

const INGREDIENTS_PRICE = {
    salad: 1.2,
    bacon: 2,
    cheese: 0.8,
    sausage: 2.5,
}

export const BURGER_BASE_PRICE = 5;

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            sausage: 0,
        },
        totalPrice: BURGER_BASE_PRICE,
        checking: false,
    }

    render() {
        return (
            <div>
                <Modal
                    checking={this.state.checking}
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    cancelOrderHandler={this.cancelOrderHandler}
                    continueOrderHandler={this.continueOrderHandler}
                />
                <Burger ingredients={this.state.ingredients} />
                <BuilderControls
                    ingredients={this.state.ingredients}
                    totalPrice={this.state.totalPrice}
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    clickOrderHandler={this.clickOrderHandler}
                />
            </div>);
    }

    addIngredientHandler = (ingredient) => {
        this.setState(prevState => {
            const prevIngredients = prevState.ingredients;
            const updatedIngredients = {
                ...prevIngredients,
            }

            updatedIngredients[ingredient] = prevIngredients[ingredient] + 1;

            const newPrice = Number((prevState.totalPrice + INGREDIENTS_PRICE[ingredient]).toFixed(2));

            return {
                ...prevState,
                ingredients: updatedIngredients,
                totalPrice: newPrice,
            }
        });
    }

    removeIngredientHandler = (ingredient) => {
        this.setState(prevState => {
            const prevIngredients = prevState.ingredients;
            const updatedIngredients = {
                ...prevIngredients,
            }
            let newPrice = prevState.totalPrice;

            if (updatedIngredients[ingredient] > 0) {
                updatedIngredients[ingredient] = prevIngredients[ingredient] - 1;
                newPrice = Number((newPrice - INGREDIENTS_PRICE[ingredient]).toFixed(2));
            }

            return {
                ...prevState,
                ingredients: updatedIngredients,
                totalPrice: newPrice,
            }
        })
    }

    clickOrderHandler = () => {
        this.setState({
            checking: true,
        });
    }

    cancelOrderHandler = () => {
        this.setState({
            checking: false,
        })
    }

    continueOrderHandler = () => {
        this.props.history.push("/checkout");
    }
}

export default BurgerBuilder;