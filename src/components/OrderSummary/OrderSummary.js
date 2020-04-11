import React from 'react';

const orderSummary = props => {
    return (
        <div style={{ textAlign: "left" }}>
            <p>This is your delicious hamburger</p>
            <ul>
                {Object.entries(props.ingredients)
                    .map(entry =>
                        <li key={entry[0]}><label>{entry[0]}</label>: {entry[1]}</li>
                    )
                }
            </ul>
            <p> Your total price: <strong>{props.totalPrice}</strong></p>
        </div>
    );
}

export default orderSummary;