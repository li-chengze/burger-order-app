import React from 'react';
import classes from "./Modal.module.css";

import OrderSummary from "../OrderSummary/OrderSummary";
import Button from "../Button/Button";

const modal = props => {
    return (
        <div
            className={classes.Modal}
            style={{ transform: props.checking ? "translateY(0)" : "translateY(-100vh)" }}>
            <OrderSummary ingredients={props.ingredients} totalPrice={props.totalPrice} />
            <Button btnType="Danger" onClick={props.cancelOrderHandler}>Cancel</Button>
            <Button btnType="Success" onClick={props.continueOrderHandler}>Continue</Button>
        </div>
    );
}

export default modal;