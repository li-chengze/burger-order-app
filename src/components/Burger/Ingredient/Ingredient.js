import React from 'react';
import classes from './Ingredient.module.css';

const ingredient = props => {
    let ingredientComponent = null;

    switch (props.type) {
        case 'salad':
            ingredientComponent = <div className={classes.Salad}></div>;
            break;
        case 'cheese':
            ingredientComponent = <div className={classes.Cheese}></div>;
            break;
        case 'sausage':
            ingredientComponent = <div className={classes.Sausage}></div>;
            break;
        case 'bacon':
            ingredientComponent = <div className={classes.Bacon}></div>;
            break;
        default: ingredientComponent = null;
    }

    return ingredientComponent;
}

export default ingredient;