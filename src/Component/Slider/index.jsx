import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Slider(props) {
    const { children, numPage, countVisible = 1 } = props;
    const [ index, setIndex ] = useState(0);
    const data = children;
    const countPage = data.length;
    let sliderWraperRef = useRef();

    return (
        <div className="slider" >
            <div ref={sliderWraperRef} className="slider__wrapper" style={{
                transform: `translateX(-${index*(100 / countVisible)}%)`
            }}>
                {!!countPage ?
                    data.map((card, id) => (
                        <div className={`slider__item ${countVisible > 1 ? "pointer" : ""} ${index === id ? "active": ""}`} style={{width: `${100 / countVisible}%`}} key={id}
                            onClick={countVisible > 1 ? (()=> {setIndex(id)}) : ()=>{} }
                        >
                            {card}
                        </div>
                    )) :
                    data
                }
            </div>
            {(numPage && !!countPage ) &&
            <div className="slider__page">
                <span className="slider__start">01</span>
                <span className="slider__percent"><span className="slider__border" style={{width: `${index / (countPage - 1) * 100}%`}}/></span>
                <span className="slider__end">{countPage < 10 ? `0${countPage}` : countPage}</span>
            </div>
            }
            {!!countPage &&
                <div className="slider__button">
                    <button className="slider__prev" onClick={() => setIndex(index - 1)} disabled={index <= 0} />
                    <button className="slider__next" onClick={() => {
                        setIndex(index + 1)
                    }} disabled={index === data.length - 1} />
                </div>
            }
        </div>
    );
}

Slider.propTypes = {
    numPage: PropTypes.bool,
    countVisible: PropTypes.number,
};

export default Slider;
