import React from 'react';
import classes from './Order.module.css';

const order = props => {
    return (
        <div className={classes.Order}>
            {Object.keys(props.order.ingredients)
                .map(
                    ingredient =>
                        <p key={ingredient}>
                            <label>{ingredient}: </label>
                            {props.order.ingredients[ingredient]}
                        </p>
                )
            }
        </div>
    );
}

export default order;