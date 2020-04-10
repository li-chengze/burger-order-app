import React from 'react';
import classes from './Burger.module.css';
import Ingredient from '../Ingredient/Ingredient';

const burger = props => {
    const ingredients =
        Object.keys(props.integredients).reduce(
            (arr, ingredient) => {
                return arr.concat(Array(props.integredients[ingredient]).fill(ingredient))
            },
            []);
    return (
        <div className={classes.Burger}>
            <div className={classes.UpperBread}></div>
            {ingredients.map((ingredient, index) => <Ingredient key={ingredient + index} type={ingredient} />)}
            <div className={classes.BottomBread}></div>
        </div>
    );
}

export default burger;