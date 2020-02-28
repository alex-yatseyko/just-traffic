import React, {useContext}  from 'react';
import PropTypes from 'prop-types';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
import {LanguageContext, getText} from "../../helper";

function Cooperate(props) {
    const { background } = props;
    const text = useContext(LanguageContext)["language"]["cooperate"];
    return (
        <FullPage background={background}>
            <div className="container">
                <Heading className="skills__heading">
                    <h2>{getText(text.header)}</h2>
                </Heading>
                <div className="skills">
                    {text.items.map((item, index) => (
                        <div key={index} className="skills__item">
                            <h3 className="skills__header border-blue">
                                {item.header}
                            </h3>
                            <p className="skills__text">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </FullPage>
    );
}

Cooperate.propTypes = {
    background: PropTypes.string.isRequired
};

export default Cooperate;
