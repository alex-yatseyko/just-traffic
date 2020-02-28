import React from 'react';
import './style.css';


function NamePage(props) {
    const {text, ...rest } = props;
    return (
        <h3 className="name__page" {...rest}>
            {text}
        </h3>
    );
}


export default NamePage;
