import React, {useEffect, useRef} from 'react';
import './style.css';
import logoCover from '../../img/logoCover.svg';


function Cover(props) {
    const hideBlock = useRef(null);
    useEffect(() => {
        const time = setTimeout(() => {
            hideBlock.current.classList.add("hide_cover");
        }, 1000);
        return () => clearTimeout(time);
    });

    return (
        <div className="cover" ref={hideBlock}>
            <img className={"img_center"} src={logoCover} alt="logo"/>
        </div>
    );
}

export default Cover;
