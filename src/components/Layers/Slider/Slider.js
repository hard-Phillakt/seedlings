import React from 'react';
import './Slider.css';
import './slider-init';
import item_1 from './img/slider__item_1.png';
import item_2 from './img/slider__item_2.png';


const slider = () => {


    return (
        <section className="slider">
            <div className="swiper-container" data-swiper-parallax="-25%">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{ backgroundImage: `url(${item_1})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Наличие показательных <br />
                                        интенсивных садов <br />
                                        грецкого ореха с латера
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swiper-slide" style={{ backgroundImage: `url(${item_2})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Наличие показательных <br />
                                        интенсивных садов <br />
                                        грецкого ореха с латера
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="swiper-slide" style={{ backgroundImage: `url(${item_1})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Наличие показательных <br />
                                        интенсивных садов <br />
                                        грецкого ореха с латера
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="swiper-pagination" />
            </div>
        </section>


    )
}

export default slider;