import React from 'react';
import logoImage from "../../../assets/logo.png";
import classes from "./Logo.module.css";

const logo = props => {
    return <img className={classes.Logo} src={logoImage} alt="logo" />
}

export default logo;