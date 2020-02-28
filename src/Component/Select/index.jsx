import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

import arrowSelected from "../../img/arrow-selected.png";



function Select(props) {
    const { list, select, isOpen, setSelect, setIsOpen } = props;
    const selected = useRef(null);


    const lisner = e => {
        if(selected.current.contains(e.target) && e.target.classList.contains(".list-item")) {
            if(!select){
                setIsOpen(true);
            }
        } else {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if(isOpen) {
            document.addEventListener("click", lisner);
            return () => {
                document.removeEventListener("click", lisner);
            }
        }
        document.removeEventListener("click", lisner);
    });

    return (
       <div className="selected" ref={selected}>
           <div className={`value ${select.id !== 0 ? "change" : ""}`} onClick={() => setIsOpen(true)}>{select.name} <img src={arrowSelected} alt="" className="arrow-selected" /></div>
           {isOpen && (
               <ul className="list">
                   {list.slice(1).map(el => (
                       <li key={el.id} className="list-item" onClick={() => setSelect({target:{name: "theme", value: el}})}>{el.name}</li>
                   ))}
               </ul>
           )
           }
       </div>
    );
}

Select.propTypes = {
    list: PropTypes.array.isRequired,
    select: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setSelect: PropTypes.func.isRequired,
    setIsOpen: PropTypes.func.isRequired
};

export default Select;
