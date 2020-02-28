import React from 'react';
import './style.css';

function Conditions(props) {
    const { heading, text } = props;
    return (
        <div className="conditions__card">
            <h4 className="conditionsCard__header">{heading}</h4>
            <p className="conditions__text">{text}</p>
        </div>
    );
}

Conditions.propTypes = {
};

export default Conditions;

