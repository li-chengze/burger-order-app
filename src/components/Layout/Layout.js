import React, { Component } from 'react';

import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

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
                <BurgerBuilder />
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