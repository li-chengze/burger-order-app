import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactInfo from './ContactInfo/ContactInfo';

import axios from "../../axios";

class Checkout extends Component {
    state = {
        order: {
            ingredients: {
                salad: 1,
                bacon: 1,
                cheese: 1,
                sausage: 1,
            },
            price: 10,
            name: "test",
            mobile: "12345",
            address: "test address",
        }
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.order.ingredients} />
                <Route
                    path={this.props.match.url}
                    exact
                    render={
                        () => (
                            <Button btnType="Danger"
                                onClick={this.cancelCheckoutHandler}>
                                Cancel
                            </Button>)
                    } />
                <Route
                    path={this.props.match.url}
                    exact
                    render={
                        () => (
                            <Button btnType="Success"
                                onClick={this.continueCheckoutHandler}>
                                Continue
                            </Button>)
                    } />
                <Route
                    path={this.props.match.url + "/contact-info"}
                    render={
                        () =>
                            <ContactInfo
                                name={this.state.order.name}
                                mobile={this.state.order.mobile}
                                address={this.state.order.address}
                            />
                    } />
            </div>
        );
    }

    cancelCheckoutHandler = () => {
        this.props.history.replace("/");
    }

    continueCheckoutHandler = () => {
        axios.post("/orders.json", this.state.order)
            .then(response => {
                console.log(response);
                this.props.history.push(this.props.match.url + "/contact-info");
            })
            .catch(error => alert(error))
    }
}

export default Checkout;