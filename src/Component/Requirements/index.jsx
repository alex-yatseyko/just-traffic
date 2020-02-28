import React, {useContext}  from 'react';
import PropTypes from 'prop-types';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
import {LanguageContext, getText} from "../../helper";

function Requirements(props) {
    const { background } = props;
    const text = useContext(LanguageContext)["language"]["requirements"];
    return (
        <FullPage background={background}>
            <div className="container">
                <Heading className="requirements__header">
                    <h2>{getText(text.header)}</h2>
                </Heading>
                <div className="requirementsList">
                    {text.items.map((item, index) => (
                        <div key={index} className="requirementsList">
                            <h3 className="requirementsList__header">
                                {getText(item.header)}
                            </h3>
                            <p className="requirementsList__text">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </FullPage>
    );
}

Requirements.propTypes = {
    background: PropTypes.string.isRequired
};

export default Requirements;
