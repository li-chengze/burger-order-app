import React from 'react';

import Order from './Order/Order';
import classes from './Orders.module.css';

const orders = props => {
    return (
        <div className={classes.Orders}>
            <Order />
            <Order />
        </div>
    );
}

export default orders;