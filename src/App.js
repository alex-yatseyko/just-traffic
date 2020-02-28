import React, { useEffect, useState, useReducer } from 'react';
import {Events, Link, scroller} from 'react-scroll';
import './Fonts.css';
import './App.css';

import { page } from './appPage';
import Navigation from './Component/Navigation';
import Social from './Component/Social';
import Cover from './Component/Cover';
import {getLanguage, LanguageContext} from "./helper";
import btnImg from './img/goTopBtn.png';

function App() {
    const [fullScroll, setFullScroll] = useState({scroll: true, element: window.location.hash.length ? window.location.hash.replace("#", "") : "home"});
    const [sizeWindow, setSizeWindow] = useState({width: window.innerWidth, height: window.innerHeight });
    
    /* Scrolling */
   
    const listener = (e) => {
        if (!e.deltaY) {
            return;
        }

        if(fullScroll.scroll) {
            const index = page.findIndex((el) => el.name === fullScroll.element);

            if(e.deltaY < 0) {
                if(index - 1 >= 0) {
                    scroller.scrollTo(page[index-1].name, {
                        duration: 800,
                        delay: 0,
                        smooth: true
                    })
                }
            }
            if(e.deltaY > 0) {
                if(index + 1 < page.length) {
                    scroller.scrollTo(page[index+1].name, {
                        duration: 800,
                        delay: 0,
                        smooth: true
                    })
                }
            }
        }
    };
    
    useEffect(() => {
        Events.scrollEvent.register('begin', function () {
            setFullScroll({ scroll: false});
        });

        Events.scrollEvent.register('end', function (hash) {
            window.location.hash = hash;
            setFullScroll({scroll: true, element: hash});
        });

        return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
        }
    });


    const resizeListener = (e) => {
        setSizeWindow({width: window.innerWidth, height: window.innerHeight });
    };

    /* Scrolling */    

    

    useEffect(() => {
        document.addEventListener("wheel", listener);
        window.addEventListener("resize", resizeListener);
        return () => {
            document.removeEventListener("wheel", listener);
            window.removeEventListener("resize", resizeListener);
        }
    });



    const [stateLanguage, dispatchLanguage] = useReducer((state, action) => {
        return {...getLanguage(action), lang: action};
    }, {...getLanguage("ru"), lang: "ru"});

    return (
        <div className="app">
            <LanguageContext.Provider value={{language: stateLanguage, changeLanguage: dispatchLanguage}} >
                <Cover/>
                <Navigation windowX={sizeWindow.width}/>
                <Social/>
                <Link className="goTop" activeClass="active" to="home" spy={true} smooth={true} duration={500}>
                    <img src={btnImg} alt="goTop"/>
                </Link>
                {
                    page.map(({Component, name}, index) => {
                        return <Component key={index} targetScroll={name} window={sizeWindow}/>
                    })
                }
            </LanguageContext.Provider>
        </div>

    );
}

export default App;
