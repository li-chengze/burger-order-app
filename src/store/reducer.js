import * as actionTypes from "./actions/actionTypes";

import { BURGER_BASE_PRICE } from '../constants';
const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        sausage: 0,
    },
    totalPrice: BURGER_BASE_PRICE,
}

const INGREDIENTS_PRICE = {
    salad: 1.2,
    bacon: 2,
    cheese: 0.8,
    sausage: 2.5,
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENTS: {
            const ingredient = action.ingredient;
            const prevIngredients = state.ingredients;
            const updatedIngredients = {
                ...prevIngredients,
            }

            updatedIngredients[ingredient] = prevIngredients[ingredient] + 1;

            const newPrice = Number((state.totalPrice + INGREDIENTS_PRICE[ingredient]).toFixed(2));

            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: newPrice,
            }
        }
        case actionTypes.REMOVE_INGREDIENTS: {
            const ingredient = action.ingredient;
            const prevIngredients = state.ingredients;
            const updatedIngredients = {
                ...prevIngredients,
            }
            let newPrice = state.totalPrice;

            if (updatedIngredients[ingredient] > 0) {
                updatedIngredients[ingredient] = prevIngredients[ingredient] - 1;
                newPrice = Number((newPrice - INGREDIENTS_PRICE[ingredient]).toFixed(2));
            }

            return {
                ...state,
                ingredients: updatedIngredients,
                totalPrice: newPrice,
            }
        }
        case actionTypes.RESET_INGREDIENTS: {
            return initialState
        }
        default: return state;
    }
}

export default reducers;