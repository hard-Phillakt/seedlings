import React from 'react';

import { connect } from 'react-redux';

import './Menu.scss'

import logo from './img/logo.svg';
import email from './icons/email.svg';
import phone from './icons/phone.svg';

import toggleLayers from '../../../actions/toggleLayers';
import viewModal from '../../../actions/viewModal';

import getServicesProd from '../../../actions/getServicesProd';
import getServices from '../../../actions/getServices';

const menu = (props) => {

    // console.log(props);
    
    return (
        <section className="menu">
            <div className="menu-wrap">
                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-1 col-md-2 col-sm-2 col-xs-2">
                            <a href="./"><img src={logo} alt="logo" /></a>
                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                            <nav className="menu-nav">
                                <ul className="menu-nav__ul fjc-c fai-c">
                                    <li className="menu-nav__ul_li">
                                        <a className={ props.layers.count === 2 ? 'link c-green fs-14 menu-active' : 'link c-green fs-14' } href="#!" onClick={() => (props.onToggleLayersHandler(2))}>Ассортимент</a>
                                    </li>
                                    <li className="menu-nav__ul_li">
                                        <a className={ props.layers.count === 3 ? 'link c-green fs-14 menu-active' : 'link c-green fs-14' } href="#!" onClick={() => (props.onToggleLayersHandler(3))}>Продукция</a>
                                    </li>
                                    <li className="menu-nav__ul_li">
                                        <a className={ props.layers.count === 4 ? 'link c-green fs-14 menu-active' : 'link c-green fs-14' } href="#!"  onClick={() => {  
                                        props.onToggleLayersHandler(4)
                                        // props.onGetServicesProdHandler()
                                        }}>Товары для сада</a>
                                    </li>
                                    <li className="menu-nav__ul_li">
                                        <a className={ props.layers.count === 5 ? 'link c-green fs-14 menu-active' : 'link c-green fs-14' } href="#!" onClick={() => { 
                                            props.onToggleLayersHandler(5)
                                            // props.onGetServicesHandler()
                                        }}>Услуги</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg-2 col-md-5 col-sm-5 col-xs-5">
                            <div className="contact-info">
                                <ul className="contact-info__ul">
                                    <li className="contact-info__ul_li fjc-c mb-10">
                                        <img className="pr-10" src={phone} alt="phone" />
                                        <a className="link c-green fs-14" href="tel:+79803895908" >+7 980 389 59 08</a>
                                    </li>
                                    <li className="contact-info__ul_li fjc-c">
                                        <img className="pr-10" src={email} alt="email" />
                                        <a className="link c-green fs-14" href="mailto:info@orekh31.ru" >info@orekh31.ru</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 dsp-none_991">
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
        onGetServicesProdHandler: (param) => {
            dispatch(getServicesProd(param))
        },
        onGetServicesHandler: (param) => {
            dispatch(getServices(param))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(menu);