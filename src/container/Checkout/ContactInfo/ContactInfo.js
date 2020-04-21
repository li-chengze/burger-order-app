import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from "./ContactInfo.module.css";

import Button from "../../../components/UI/Button/Button"
class ContactInfo extends Component {

    render() {
        return (
            <div className={classes.ContactInfo}>
                Please enter your contact information
                <form>
                    <div className={classes.Field}><label>Name: </label><input value={this.props.name} /></div>
                    <div className={classes.Field}><label>Mobile: </label><input value={this.props.mobile} /></div>
                    <div className={classes.Field}><label>Address: </label><input value={this.props.address} /></div>
                </form>
                <Button btnType="Success" onClick={this.orderHandler}>Order</Button>
            </div>
        );
    }

    orderHandler = () => {
        this.props.history.push("/");
    }
}

export default withRouter(ContactInfo);