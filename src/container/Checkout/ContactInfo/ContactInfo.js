import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import classes from "./ContactInfo.module.css";

import Button from "../../../components/UI/Button/Button"
import axios from "../../../axios";
import * as actionTypes from "../../../store/actions/actionTypes";

class ContactInfo extends Component {

    render() {
        return (
            <div className={classes.ContactInfo}>
                Please enter your contact information
                <form>
                    <div className={classes.Field}><label>Name: </label><input value={this.props.order.name} /></div>
                    <div className={classes.Field}><label>Mobile: </label><input value={this.props.order.mobile} /></div>
                    <div className={classes.Field}><label>Address: </label><input value={this.props.order.address} /></div>
                </form>
                <Button btnType="Success" onClick={this.orderHandler}>Order</Button>
            </div>
        );
    }

    orderHandler = () => {
        axios.post("/orders.json", this.props.order)
            .then(_ => {
                this.props.resetIngredients();
                this.props.history.push("/");
            })
            .catch(error => alert(error))
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        resetIngredients: () => {
            dispatch({ type: actionTypes.RESET_INGREDIENTS })
        }
    }
}

export default connect(null, mapDispatchToProps)(withRouter(ContactInfo));