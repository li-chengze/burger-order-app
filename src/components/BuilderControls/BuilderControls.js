import React from 'react';
import BuilderControl from "./BuilderControl/BuilderControl";
import classes from "./BuilderControls.module.css";

import { BURGER_BASE_PRICE } from "../../container/BurgerBuilder/BurgerBuilder";

const builderControls = props => {

    return (
        <div className={classes.BuilderControls}>
            <p className={classes.PriceBanner}>Total Price: {props.totalPrice}</p>
            {Object.keys(props.ingredients)
                .map(ingredient =>
                    <BuilderControl
                        key={ingredient}
                        type={ingredient}
                        ingredientCount={props.ingredients[ingredient]}
                        addIngredientHandler={props.addIngredientHandler}
                        removeIngredientHandler={props.removeIngredientHandler}
                    />)}
            <button
                className={classes.OrderButton}
                disabled={props.totalPrice === BURGER_BASE_PRICE}
                onClick={props.clickOrderHandler}
            >
                ORDER
            </button>
        </div>
    );
}

export default builderControls;