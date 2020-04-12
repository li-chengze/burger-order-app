import React, { Fragment } from 'react';
import classes from "./Modal.module.css";

import OrderSummary from "../OrderSummary/OrderSummary";
import Button from "../../Burger/Button/Button";
import BackDrop from "../BackDrop/BackDrop";

const modal = props => {
    return (
        <Fragment>
            <BackDrop show={props.checking} onClick={props.cancelOrderHandler} />
            <div
                className={classes.Modal}
                style={{ transform: props.checking ? "translateY(0)" : "translateY(-100vh)" }}>
                <OrderSummary ingredients={props.ingredients} totalPrice={props.totalPrice} />
                <Button btnType="Danger" onClick={props.cancelOrderHandler}>Cancel</Button>
                <Button btnType="Success" onClick={props.continueOrderHandler}>Continue</Button>
            </div>
        </Fragment>
    );
}

export default modal;