import React from 'react';
import './style.css';

function Social(props) {

    return (
        <div className="social">
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="#" target="_blank" className="social__facebook" />
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="#" target="_blank" className="social__linkedin" />
            {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
            <a href="#" target="_blank" className="social__instagram" />
        </div>
    );
}

export default Social;
