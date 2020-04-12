import React from 'react';

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css"

const navigationItems = props => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active>Burger Builder</NavigationItem>
            <NavigationItem link="/order">Orders</NavigationItem>
        </ul>
    );
}

export default navigationItems;