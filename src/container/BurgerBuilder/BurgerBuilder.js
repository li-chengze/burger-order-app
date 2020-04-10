import React, { Component } from 'react';

import Burger from "../../components/Burger/Burger"

class BurgerBuilder extends Component {

    state = {
        integredients: {
            salad: 1,
            bacon: 1,
            cheese: 1,
            sausage: 2,
        }
    }
    render() {
        return (
            <div>
                <Burger integredients={this.state.integredients} />
            </div>);
    }
}

export default BurgerBuilder;