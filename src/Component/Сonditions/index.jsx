import React, {useContext} from 'react';
import './style.css';

import FullPage from "../FullPage";
// import NamePage from "../NamePage";
import Heading from "../Heading";
import Slider from "../Slider";
import СonditionsCard from "../СonditionsCard";
import {LanguageContext, getText} from "../../helper";

function Conditions(props) {
    const { background, window } = props;

    const text = useContext(LanguageContext)["language"]["conditions"];
    return (
        <FullPage background={background}>
            <div className="container">
                <Heading className="conditions__header">
                    <h2>{getText(text.header)}</h2>
                </Heading>
                <Slider
                    numPage={true}
                    countVisible={window.width > 1260 ? 4 : window.width < 768 ? 1 : 2}
                >
                    {text.services.map((el, index) => (
                        <СonditionsCard
                            key={index}
                            heading={el.name}
                            text={el.text}
                        />
                        )
                    )}
                </Slider>
            </div>
        </FullPage>
    );
}

export default Conditions;
