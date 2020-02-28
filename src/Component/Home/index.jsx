import React, {useContext}  from 'react';
import PropTypes from 'prop-types';
import './style.css';

import FullPage from "../FullPage";
import Heading from "../Heading";
import Slider from "../Slider";
import arrowDownBtn from "../../img/arrow-down-btn.png";
import {Link} from "react-scroll";

import {LanguageContext, getText} from "../../helper";

function Home(props) {
    const { background } = props;
    const text = useContext(LanguageContext)["language"]["home"];
    return (
        <FullPage background={background}>
            <div className="container">
                <div className="headerCard">
                    <Heading className="header_home">
                        <h2>{getText(text.header)}</h2>
                    </Heading>
                    <h3 className="headerCard__subHeader1 desktop">{text.subHeader1}{text.subHeader2}{text.subHeader3}</h3>
                    <div className="mobile">
                        <h3 className="headerCard__subHeader1">{text.subHeader1}</h3>
                        <h3 className="headerCard__subHeader2">{text.subHeader2}</h3>
                        <h3 className="headerCard__subHeader3">{text.subHeader3}</h3>
                    </div>
                    <p className="headerCard__text">{text.text}</p>
                    <Slider
                        numPage={true}
                    >
                        {text.slide.map((el, index) => {
                            return (
                                <p key={index} className="headerCard__slogan">{el.slogan}</p>
                            )
                            }
                        )}
                    </Slider>
                </div>
                <div className="downBtn">
                    <Link className="btnScroll" activeClass="active" to="why-us" spy={true} smooth={true} duration={500}>
                        <img src={arrowDownBtn} alt=""/>
                    </Link>
                </div>
            </div>
        </FullPage>
    );
}

Home.propTypes = {
    background: PropTypes.string.isRequired
};

export default Home;
