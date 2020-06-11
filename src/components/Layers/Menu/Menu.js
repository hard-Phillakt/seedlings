import React from 'react';
import { connect } from 'react-redux';
import './Menu.scss'
import logo from './img/logo.svg';
import email from './icons/email.svg';
import phone from './icons/phone.svg';

import toggleLayers from '../../../actions/toggleLayers';
import viewModal from '../../../actions/viewModal';

const menu = (props) => {

    console.log(props);
    

    return (
        <section className="menu">
            <div className="menu-wrap">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-1">
                            <img src={logo} alt="logo" />
                        </div>

                        <div className="col-lg-5">
                            <nav className="menu-nav">
                                <ul className="menu-nav__ul fjc-c fai-c">
                                    <li className="menu-nav__ul_li">
                                        <a className="link c-green fs-14" href="#!" onClick={() => (props.onToggleLayersHandler(2))}>Ассортимент</a>
                                    </li>
                                    <li className="menu-nav__ul_li">
                                        <a className="link c-green fs-14" href="#!" onClick={() => (props.onToggleLayersHandler(3))}>Продукция</a>
                                    </li>
                                    <li className="menu-nav__ul_li">
                                        <a className="link c-green fs-14" href="#!" onClick={() => (props.onToggleLayersHandler(4))}>Услуги</a>
                                    </li>
                                    {/* <li className="menu-nav__ul_li">
                                        <a className="link c-green fs-14" href="#!">Товары для сада</a>
                                    </li> */}
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-2">
                            <div className="contact-info">
                                <ul className="contact-info__ul">
                                    <li className="contact-info__ul_li fjc-c mb-10">
                                        <img className="pr-10" src={phone} alt="phone" />
                                        <a className="link c-green fs-14" href="tel:+7 000 000 00 00" >+7 000 000 00 00</a>
                                    </li>
                                    <li className="contact-info__ul_li fjc-c">
                                        <img className="pr-10" src={email} alt="email" />
                                        <a className="link c-green fs-14" href="mailto:info@orekh31.ru" >info@orekh31.ru</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="button" onClick={() => (props.onViewModalHandler())}>
                                <span className="button-learn-more" >
                                {/* pt-10 pb-10 pr-10 pl-10 */}
                                    <a href="#!" className="button-learn-more__a c-green-b fs-14">Свяжитесь с нами, чтобы узнать больше</a>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onToggleLayersHandler: (param) => {

            dispatch(toggleLayers(param));
        },
        onViewModalHandler: (param) => {
            dispatch(viewModal(param));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);