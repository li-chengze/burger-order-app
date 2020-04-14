import React from 'react';
import classes from './Button.module.css';

const button = props => {
    let btnClass = null;
    if (props.btnType === 'Danger') {
        btnClass = classes.Danger;
    } else if (props.btnType === 'Success') {
        btnClass = classes.Success;
    }
    return (
        <button className={[classes.Button, btnClass].join(" ")} onClick={props.onClick}>
            {props.children}
        </button>
    );
}

export default button;