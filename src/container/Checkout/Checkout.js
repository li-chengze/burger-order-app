import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Burger from '../../components/Burger/Burger';
import Button from '../../components/UI/Button/Button';
import ContactInfo from './ContactInfo/ContactInfo';
import { connect } from 'react-redux';

class Checkout extends Component {
    state = {
        order: {
            ingredients: null,
            price: 10,
            name: "test",
            mobile: "12345",
            address: "test address",
        }
    }

    componentDidMount() {
        const updatedOrder = {
            ...this.state.order,
            ingredients: this.props.ingredients
        };
        this.setState({ order: updatedOrder });
    }

    render() {
        const burger =
            this.state.order.ingredients !== null
                ? <Burger ingredients={this.state.order.ingredients} />
                : null;
        return (
            <div>
                {burger}
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
                                order={this.state.order}
                            />
                    } />
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

const mapStateToProps = (state) => {
    return {
        ingredients: state.ingredients
    }
}

export default connect(mapStateToProps)(Checkout);