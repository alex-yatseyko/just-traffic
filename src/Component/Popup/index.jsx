import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
import Approved from "../../img/approved.png";
import {LanguageContext, getText} from "../../helper";

function Popup(props) {
    const text = useContext(LanguageContext)["language"]["contactUs"];
    return (
        <FullPage background={background}>
            <div className="container">
                <div className="popup__wrap">
                    <div className="popup__text">
                        <img src={Approved} alt=""/>
                        <Heading>
                            <h2>{getText(text.popupHeader)}</h2>
                        </Heading>
                        <p>{text.popupMsg}</p>
                    </div>
                </div>
            </div>
        </FullPage>
    );
}

export default Popup;