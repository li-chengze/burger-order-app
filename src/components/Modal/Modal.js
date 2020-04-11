import React from 'react';
import classes from "./Modal.module.css";

import OrderSummary from "../OrderSummary/OrderSummary";
import Button from "../Button/Button";

const modal = props => {
    return (
        <div
            className={classes.Modal}
            style={{ transform: props.checking ? "translateY(0)" : "translateY(-100vh)" }}>
            <OrderSummary ingredients={props.ingredients} />
            <Button btnType="Danger">Cancel</Button>
            <Button btnType="Success">Continue</Button>
        </div>
    );
}

export default modal;