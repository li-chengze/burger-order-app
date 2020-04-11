import React from 'react';

const orderSummary = props => {
    return (
        <div>
            <p>This is your delicious hamburger</p>
            <ul style={{ textAlign: "left" }}>
                {Object.entries(props.ingredients)
                    .map(entry =>
                        <li key={entry[0]}><label>{entry[0]}</label>: {entry[1]}</li>
                    )
                }
            </ul>
        </div>
    );
}

export default orderSummary;