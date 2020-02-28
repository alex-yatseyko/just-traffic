import React, {useContext}  from 'react';
import PropTypes from 'prop-types';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
import Slider from "../Slider";

import {LanguageContext, getText} from "../../helper";

function Team(props) {
    const { background } = props;
    const text = useContext(LanguageContext)["language"]["team"];
    return (
        <FullPage background={background}>
            <div className="container">
                <div className="headerCard">
                    <Heading>
                        <h2>{getText(text.header)}</h2>
                    </Heading>
                    <h3 className="team__text">{getText(text.text)}</h3>
                    <Slider
                        numPage={true}
                    >
                        {text.slide.map((el, index) => {
                            return (
                                <div className="teamCard">
                                    <h4 className="teamCard__header border-blue">{el.header}</h4>
                                    <p className="teamCard__text">{el.text}</p>
                                </div>
                            )
                            }
                        )}
                    </Slider>
                </div>
            </div>
        </FullPage>
    );
}

Team.propTypes = {
    background: PropTypes.string.isRequired
};

export default Team;
