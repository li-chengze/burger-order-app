import React, { Component } from 'react';

import Order from './Order/Order';
import classes from './Orders.module.css';

import axios from '../../axios';

class Orders extends Component {
    state = {
        orders: [],
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                this.setState({ orders: Object.entries(response.data) })
            })
            .catch(error => alert(error))
    }

    render() {
        return (
            <div className={classes.Orders}>
                {this.state.orders.map(order => <Order key={order[0]} order={order[1]} />)}
            </div>
        );
    }
}

export default Orders;