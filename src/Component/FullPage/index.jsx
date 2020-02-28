import React from 'react';
import './style.css';

function FullPage(props) {
    const { background, children, className } = props;
    return (
        <div className="full-page" style={{backgroundImage: `url(${background})`}}>
            <div className={`full-page__smooth ${className}`}>
                {children}
            </div>
        </div>

    );
}

export default FullPage;
