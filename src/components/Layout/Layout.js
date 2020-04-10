import React from 'react';

import BurgerBuilder from "../../container/BurgerBuilder/BurgerBuilder"
const layout = props => {
    return (
        <div>
            <nav>logo, sidedrawer, burgerbuilder</nav>
            <div><BurgerBuilder /></div>
        </div>
    );
}

export default layout;