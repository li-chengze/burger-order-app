import React, { Component } from 'react';

import Burger from "../../components/Burger/Burger";
import BuilderControls from "../../components/BuilderControls/BuilderControls";
import Modal from "../../components/UI/Modal/Modal";
import * as actionTypes from "../../store/actions/actionTypes";

import { connect } from 'react-redux';

class BurgerBuilder extends Component {

    state = {
        checking: false,
    }

    render() {
        return (
            <div>
                <Modal
                    checking={this.state.checking}
                    ingredients={this.props.ingredients}
                    totalPrice={this.props.totalPrice}
                    cancelOrderHandler={this.cancelOrderHandler}
                    continueOrderHandler={this.continueOrderHandler}
                />
                <Burger ingredients={this.props.ingredients} />
                <BuilderControls
                    ingredients={this.props.ingredients}
                    totalPrice={this.props.totalPrice}
                    addIngredientHandler={this.addIngredientHandler}
                    removeIngredientHandler={this.removeIngredientHandler}
                    clickOrderHandler={this.clickOrderHandler}
                />
            </div>);
    }

    addIngredientHandler = (ingredient) => {
        this.props.addIngredient(ingredient)
    }

    removeIngredientHandler = (ingredient) => {
        this.props.removeIngredient(ingredient);
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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        addIngredient: (ingredient) => dispatch({ type: actionTypes.ADD_INGREDIENTS, ingredient }),
        removeIngredient: (ingredient) => dispatch({ type: actionTypes.REMOVE_INGREDIENTS, ingredient })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);