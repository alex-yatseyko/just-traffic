import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
// import graphImg from "../../img/graph.png";
import graphImg2 from "../../img/graph-2.png";
import {LanguageContext, getText} from "../../helper";

function WhyUs(props) {
    const { background } = props;
    const text = useContext(LanguageContext)["language"]["WhyUs"];
    return (
        <FullPage background={background}>
            <div className="container">
                <div className="whyUs__wrap">
                    <div className="whyUs__text">
                        <Heading>
                            <h2>{getText(text.header)}</h2>
                        </Heading>
                        <p>{text.paragraph1}</p>
                        <p>{text.paragraph2}</p>
                    </div>
                    <div className="whyUs__stat">
                        <img src={graphImg2} alt=""/>
                        <p>{getText(text.text)}</p>
                    </div>
                </div>
            </div>
        </FullPage>
    );
}

WhyUs.propTypes = {
    background: PropTypes.string.isRequired
};

export default WhyUs;
