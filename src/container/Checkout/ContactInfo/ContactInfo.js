import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import classes from "./ContactInfo.module.css";

import Button from "../../../components/UI/Button/Button"
class ContactInfo extends Component {

    state = {
        name: 'test',
        tel: '1234567',
        address: {
            province: 'shandong',
            city: 'dongying',
            street: 'beiyi road'
        }
    }

    render() {
        return (
            <div className={classes.ContactInfo}>
                Please enter your contact information
                <form>
                    <div className={classes.Field}><label>Name: </label><input /></div>
                    <div className={classes.Field}><label>Mobile: </label><input /></div>
                    <div className={classes.Field}><label>Address: </label><input /></div>
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