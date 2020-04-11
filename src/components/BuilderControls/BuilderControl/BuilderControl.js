import React from 'react';
import classes from "./BuilderControl.module.css"

const builderControl = props => {
    return (
        <div className={classes.BuilderControl}>
            <label className={classes.Label}>{props.type}</label>
            <button
                className={classes.Less}
                disabled={props.ingredientCount === 0}
                onClick={() => { props.removeIngredientHandler(props.type) }}>
                Less
            </button>
            <button className={classes.More} onClick={() => { props.addIngredientHandler(props.type) }}>More</button>
        </div>
    );
}

export default builderControl;