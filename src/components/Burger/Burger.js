import React from 'react';
import classes from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const burger = props => {
    const ingredients =
        Object.keys(props.ingredients).reduce(
            (arr, ingredient) => {
                return arr.concat(Array(props.ingredients[ingredient]).fill(ingredient))
            },
            []);

    const ingredientsComponent =
        ingredients.length === 0
            ? <p>Please add ingredients</p> :
            ingredients.map(
                (ingredient, index) =>
                    <Ingredient key={ingredient + index} type={ingredient}
                    />
            );

    return (
        <div className={classes.Burger}>
            <div className={classes.UpperBread}></div>
            {ingredientsComponent}
            <div className={classes.BottomBread}></div>
        </div>
    );
}

export default burger;