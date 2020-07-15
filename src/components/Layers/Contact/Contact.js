import React from 'react';
import { connect } from 'react-redux';

import deltaLayer from '../../../actions/layers';
import toggleLayers from '../../../actions/toggleLayers';

import logoContact from './img/logo-contact.svg';

import phone from './img/icons/icon-phone.svg';
import email from './img/icons/icon-email.svg';
import addres from './img/icons/icon-addres.svg';
import insta from './img/icons/icon-Insta.svg';
import vk from './img/icons/icon-vk.svg';

// icon-phone
// icon-addres
// icon-email
// icon-insta
// icon-vk

import './Contact.scss';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section id="contact" className="contact" onWheel={window.innerWidth > 1400 ? (e) => (this.props.onDeltaYhandler(e)) : null}>
                {/* <section className="contact" > */}
                <div className="contact-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 offset-lg-1">
                                <div className="contact__logo">
                                    <a href="./">
                                        <img src={logoContact} alt="contact-logo" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <ul className="contact__list">
                                    <li>
                                        <a href="tel:+79803895908">
                                            <span className="mr-20">
                                                <img src={phone} alt="phone" />
                                            </span>
                                            +7 980 389 59 08
                                        </a>
                                    </li>

                                    <li>
                                        <a href="mailto:info@orekh31.ru">
                                            <span className="mr-20">
                                                <img src={email} alt="email" />
                                            </span>
                                        info@orekh31.ru
                                        </a>
                                    </li>

                                    <li>
                                        <span>
                                            <span className="mr-20">
                                                <img src={addres} alt="addres" />
                                            </span>
                                        308505, РФ, Белгородский район, с. Никольское, ул. Пролетарская, д. 21
                                        </span>
                                    </li>

                                    <li>
                                        <a href="#!">
                                            <span className="mr-20">
                                                <img src={vk} alt="vk" />
                                            </span>
                                        vk.com/orekh31
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#!">
                                            <span className="mr-20">
                                                <img src={insta} alt="insta" />
                                            </span>
                                        @orekh31
                                        </a>
                                    </li>


                                </ul>
                            </div>

                            <div className="col-lg-8 offset-lg-2">
                                {/* <div id="map"></div> */}
                                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae0e70e30abb71f816a30f6e0409365aaa8771c2f16345c8e4541fd2f14abcb4b&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}



const mapStateToProps = (state) => {
    return { ...state }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onDeltaYhandler: (param) => {

            dispatch(deltaLayer(param.deltaY));
        },
        onToggleLayersHandler: (param) => {

            dispatch(toggleLayers(param));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);