import React, {useContext} from 'react';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
import {LanguageContext, getText} from "../../helper";

function Usage(props) {
    const { background } = props;

    const text = useContext(LanguageContext)["language"]["usage"];
    return (
        <FullPage background={background}>
            <div className="container">
                <Heading className="usage__header">
                    <h2>{getText(text.header)}</h2>
                </Heading>
                <ul className="usage__text">
                    {text.items.map(item => <li>{item}</li>)}
                </ul>
            </div>
        </FullPage>
    );
}

export default Usage;
