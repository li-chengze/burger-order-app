import React from 'react';

import classes from './Toolbar.module.css';

import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "../SideDrawer/SideDrawerToggle/SideDrawerToggle";

const toolbar = props => {
    return (
        <div className={classes.Toolbar}>
            <div><SideDrawerToggle openSideDrawerHandler={props.openSideDrawerHandler} /></div>
            <div className={classes.Logo} ><Logo /></div>
            <nav className={classes.DeskOnly}>
                <NavigationItems />
            </nav>
        </div>
    );
}

export default toolbar;