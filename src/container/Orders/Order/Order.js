import React from 'react';
import classes from './Order.module.css';

const order = props => {
    return (
        <div className={classes.Order}>
            <p>Salad: 1</p>
            <p>Sausage: 1</p>
            <p>Total Price: USD 10</p>
        </div>
    );
}

export default order;