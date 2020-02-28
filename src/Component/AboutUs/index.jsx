import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
import {LanguageContext, getText} from "../../helper";
import Slider from "../Slider";

function Home(props) {
    const { background } = props;
    const about = useContext(LanguageContext)["language"]["aboutUs"];
    return (
        <FullPage background={background}>
            <div className="container">
                <Slider
                    numPage={true}
                >
                    {about.map((el, indexSlider) => {
                            return (
                                <div className="aboutUsItem" key={indexSlider}>
                                    <Heading>
                                        <h2>{getText(el.header)}</h2>
                                    </Heading>
                                    <h3 className="subHeader">{getText(el.subHeader)}</h3>
                                    <div className="aboutUsItem__list">
                                        {el.items.map((item, indexItem) => (
                                            <div className={el.items.length % 2 === 0 ? "even" : "one"} key={indexItem}><p className="border-blue">{item}</p></div>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                    )}
                </Slider>

            </div>
        </FullPage>
    );
}

Home.propTypes = {
    background: PropTypes.string.isRequired
};

export default Home;
