import React, {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Approved from "../../img/approved.png";
import Popup from "reactjs-popup";
import FullPage from "../FullPage";
import Select from "../Select";
import {LanguageContext} from "../../helper";


function Contacts(props) {
    const {background} = props;

    const text = useContext(LanguageContext)["language"]["contactUs"];

    const selectList = text.theme.map((el, index) => ({
        id: index,
        name: el
    }));

    const initialForm = {
        msg: "",
        name: "",
        email: "",
        theme: selectList[0],
        validate: {
            msg: false,
            name: false,
            email: false,
            theme: false
        }
    };
    const [form, setForm] = useState(initialForm);
    const [isOpen, setIsOpen] = useState(false);




    function validate(target, data) {
        const val = target.value;
        switch (target.name) {
            case "email":
                data = {
                    ...data,
                    validate: {...data.validate, ...{[target.name]: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(val)}}
                };
                break;
            case "name":
                data = {
                    ...data,
                    validate: {...data.validate, ...{[target.name]: val.length >= 3}}
                };
                break;
            case "theme":
                data = {
                    ...data,
                    validate: {...data.validate, ...{[target.name]: true}}
                };
                break;
            case "msg":
                data = {
                    ...data,
                    validate: {...data.validate, ...{[target.name]: val.length >= 5}}
                };
                break;
            default:
                data = {
                    ...data,
                    validate: {...data.validate, ...{[target.name]: false}}
                };
        }
        return data;
    }

    const changeInput = (e) => {

        const target = e.target;
        let data = {
            ...form,
            [target.name]: target.value
        };
        data = validate(target, data);

        if(data.validate[target.name]) {
            if(target.nextSibling) {
                target.nextSibling.style.background = "#00a7e1";
                target.nextSibling.style.width = "100%";
            }
        } else {
            if(target.nextSibling) {
                e.target.nextSibling.style.background = "red";
                e.target.nextSibling.style.width = "100%";
            }
        }

        setForm(data);
    };

    const submit = async () => {
        if (form.validate.email && form.validate.msg && form.validate.name && form.validate.theme) {
            await fetch(`/mailSend?theme=${form.theme.name}&email=${form.email}&name=${form.name}&msg=${form.msg}`);
            for (const element of document.querySelectorAll(".select")) {
                element.style.width = "";
            }
            setForm(initialForm);
        }
    };

    if(form.theme && (form.theme.name !== selectList[form.theme.id].name)) {
        changeInput({target:{name: "theme", value: selectList[form.theme.id]}})
    }

    return (

        <FullPage background={background} className="contacts">
            <div className="container">
                <div className="form">
                    <h3 className="name">{text.header}</h3>
                    <h3 className="nameMobile">{text.headerMobile}</h3>
                    <div className="field">
                        <div className="row">
                            <div className="select-animate">
                                <input type="" name="email" onChange={changeInput} value={form.email}
                                       placeholder={text.email}/>
                                <div className="select"/>
                            </div>
                        </div>
                        <div className="row col-2">
                            <div className="select-animate">
                                <input type="" name="name" onChange={changeInput} value={form.name} placeholder={text.name}/>
                                <div className="select"/>
                            </div>
                            <Select name="Theme"
                                    list={selectList}
                                    select={form.theme}
                                    isOpen={isOpen}
                                    setSelect={changeInput}
                                    setIsOpen={setIsOpen}
                            />
                        </div>
                        <div className="row">
                            <div className="select-animate">
                                <input type="text" name="msg" onChange={changeInput} value={form.msg}
                                       placeholder={text.text}/>
                                <div className="select"/>
                            </div>
                        </div>
                    </div>
                    {/*(<button className="button contacts__button button--arrow-right" onClick={submit}>
                        {text.btn}
                    </button>*/}
                    <Popup trigger={<button className="button contacts__button button--arrow-right" onClick={submit}>
                        {text.btn}
                    </button>} modal>
                        {close => (
                        <div className="modal">
                            <a className="close" onClick={close}>
                            &times;
                            </a>
                            <img src={Approved} alt=""/>
                            <h3 className="popup__heading">{text.popupHeader}</h3>
                            <p className="popup__text">{text.popupMsg}</p>
                            <div className="actions">
                            <button
                                className="popup__button"
                                onClick={() => {
                                console.log("modal closed ");
                                close();
                                }}
                            >
                                OK
                            </button>
                            </div>
                        </div>
                        )}
                    </Popup>
                </div>
                <div className="phone">
                    <a href="tel:+380937707627">+380937707627</a>
                    <a href="mailto:just.traffic.pro@gmail.com">just.traffic.pro@gmail.com</a>
                </div>
                <div className="footer">
                    <div className="footer-social social">
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="#" target="_blank" className="social__facebook"/>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="#" target="_blank" className="social__linkedin"/>
                        {/* eslint-disable-next-line jsx-a11y/anchor-has-content */}
                        <a href="#" target="_blank" className="social__instagram"/>
                    </div>
                    <p className="copyright">© 2019 - Trafficpro, Inc</p>
                </div>
            </div>
        </FullPage>
    );
}

Contacts.propTypes = {
    background: PropTypes.string.isRequired
};

export default Contacts;
