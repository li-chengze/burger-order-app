import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Orders from '../../container/Orders/Orders';

class Layout extends Component {
    state = {
        sideDrawerOpened: false,
    }

    render() {
        return (
            <div>
                <Toolbar openSideDrawerHandler={this.openSideDrawerHandler} />
                <SideDrawer
                    opened={this.state.sideDrawerOpened}
                    closeSideDrawerHandler={this.closeSideDrawerHandler} />
                <Route path="/" component={BurgerBuilder} exact></Route>
                <Route path="/orders" component={Orders}></Route>
            </div>
        );
    }

    openSideDrawerHandler = () => {
        this.setState({
            sideDrawerOpened: true,
        });
    }

    closeSideDrawerHandler = () => {
        this.setState({
            sideDrawerOpened: false,
        });
    }
}

export default Layout;