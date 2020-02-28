import React, { useEffect, useState, useContext } from 'react';
import logo from '../../img/logo.svg';
import './style.css';
import Flag from 'react-world-flags'
import {scroller} from "react-scroll/modules";
import {Link} from "react-scroll";

import {page} from "../../appPage";
import listLanguage from "../../helper/language";
import {LanguageContext} from "../../helper";

function scrollTo(name) {
    scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: true
    })
}

function Navigation(props) {
    const { windowX } = props;
    const [isScroll, setIsScroll] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    useEffect(() => {
        if(window.scrollY === 0) {
            if(isScroll) {
                setIsScroll(false);
            }
        } else {
            if(!isScroll) {
                setIsScroll(true);
            }
        }
    });

    const menu = page.filter(el => !!el.label);
    const isMobile = windowX < 768;
    const funcLink = el => () => {
        if(isMobile) {
            setIsOpenMenu(false)
        }
        scrollTo(el.name)
    };

    const changeLanguage = useContext(LanguageContext)["changeLanguage"];
    const text = useContext(LanguageContext)["language"];
    const listLanguageConst = Object.entries(listLanguage).map(el => el[0]);

    return (
        <header className={`navigation navigation-header ${isScroll ? "scroller" : ""}`}>
            <div className="container">
                <div className="logo-wrap">
                    <Link className="pointer" activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                        <img src={logo} alt="JustTraffic"/>
                    </Link>
                </div>
                <div className="mobile__lang">
                    {listLanguageConst.map((el, index) =>  el !== text.lang && <Flag key={index} className="flag__language" code={el} height={15} onClick={() =>{ setIsOpenMenu(false);changeLanguage(el)}} />)}
                </div>
                <nav className={`navigation__list ${isMobile ? "mobi" : ""} ${isOpenMenu ? "open" : ""}`}>
                    {  isMobile && (
                        <button className={"closeMobileMenu"} onClick={() => setIsOpenMenu(false)}></button>
                    )}
                    <ul>
                        <li>
                            {listLanguageConst.map((el, index) =>  el !== text.lang && <Flag key={index} className="flag__language" code={el} height={15} onClick={() =>{ setIsOpenMenu(false);changeLanguage(el)}} />)}
                        </li>

                        {menu.map((el, index) => <li className={`${window.location.hash.replace("#","")=== el.name ? "active" : ""}`} key={index} onClick={funcLink(el)}>{text["menu"][el.label]}</li>)}
                    </ul>
                </nav>
                <div>
                    {
                        windowX < 768 && (
                            <button className={"btnMenu"} onClick={() => setIsOpenMenu(true)}>
                                <span/>
                                <span/>
                                <span/>
                            </button>
                        )
                    }
                    <a href="http://just-traffic.org" className={`button navigation__partnerButton ${isMobile ? "button_mobile" : ""} ${isOpenMenu ? "buttonLink_open" : ""}`}>
                        JUST-TRAFFIC.ORG
                    </a>

                </div>
            </div>
        </header>

    );
}

export default Navigation;
