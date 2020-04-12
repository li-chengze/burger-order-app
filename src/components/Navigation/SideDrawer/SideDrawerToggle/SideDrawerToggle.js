import React from 'react';

import classes from './SideDrawerToggle.module.css';

const sideDrawerToggle = props => {
    return (
        <div className={classes.DrawerToggle} onClick={props.openSideDrawerHandler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default sideDrawerToggle;