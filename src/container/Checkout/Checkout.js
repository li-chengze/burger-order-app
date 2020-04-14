import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactInfo from './ContactInfo/ContactInfo';

class Checkout extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            sausage: 1,
        },
    }

    render() {
        return (
            <div>
                <Burger ingredients={this.state.ingredients} />
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
                <Route path={this.props.match.url + "/contact-info"} component={ContactInfo} />
            </div>
        );
    }

    cancelCheckoutHandler = () => {
        this.props.history.replace("/");
    }

    continueCheckoutHandler = () => {
        this.props.history.push(this.props.match.url + "/contact-info");
    }
}

export default Checkout;