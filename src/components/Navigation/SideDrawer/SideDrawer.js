import React, { Fragment } from 'react';

import classes from "./SideDrawer.module.css";

import Logo from "../Logo/Logo";
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from "../../UI/BackDrop/BackDrop";

const sideDrawer = props => {
    const sideDrawerDisplayStyle = props.opened ? classes.Open : classes.Close;
    return (
        <Fragment>
            <BackDrop show={props.opened} onClick={props.closeSideDrawerHandler} />
            <div className={[classes.SideDrawer, sideDrawerDisplayStyle].join(" ")}>
                <div className={classes.Logo}><Logo /></div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Fragment>
    );
}

export default sideDrawer;