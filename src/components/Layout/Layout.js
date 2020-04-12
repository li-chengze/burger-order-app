import React from 'react';

import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
    return (
        <div>
            <Toolbar />
            <SideDrawer />
            <BurgerBuilder />
        </div>
    );
}

export default layout;