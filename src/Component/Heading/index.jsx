import React from 'react';
import './style.css';

function Heading(props) {
    const { children, className, ...rest } = props;
    return (
        <div className={`heading ${className}`} {...rest}>
            {children}
        </div>
    );
}


export default Heading;
