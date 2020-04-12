import React from 'react';

import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar"

const layout = props => {
    return (
        <div>
            <Toolbar />
            <BurgerBuilder />
        </div>
    );
}

export default layout;