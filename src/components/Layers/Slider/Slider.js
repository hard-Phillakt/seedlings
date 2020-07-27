import React from 'react';
import { connect } from 'react-redux';
import deltaLayer from '../../../actions/layers';
import './Slider.css';
import './slider-init';
import item_1 from './img/slider__item_1.png';
import item_2 from './img/slider__item_2.png';

// import slider__item_1 from './min/slider__item_1.jpg'; // Все виды посадочных работ
// import slider__item_2 from './min/slider__item_2.jpg'; // Доставка
// import slider__item_3 from './min/slider__item_3.jpg'; // Консультационные услуги 2
// import slider__item_4 from './min/slider__item_4.jpg'; // Техническое сопровождение
// import slider__item_5 from './min/slider__item_5.jpg'; // Формирование кроны

import slider__item_1 from './min/webp/slider-1.webp';
import slider__item_2 from './min/webp/slider-2.webp';
import slider__item_3 from './min/webp/slider-3.webp';
import slider__item_4 from './min/webp/slider-4.webp';
import slider__item_5 from './min/webp/slider-5.webp';
import slider__item_6 from './min/webp/slider-6.webp';

const slider = (props) => {

    return (
        <section id="slider" className="slider" onWheel={ window.innerWidth > 1400 ? (e) => (props.onDeltaYhandler(e)) : null }>
            <div className="swiper-container" data-swiper-parallax="-25%">
                <div className="swiper-wrapper">
                    {/* 1 */}
                    <div className="swiper-slide" style={{ backgroundImage: `url(${slider__item_1})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Наличие показательных <br /> интенсивных садов <br /> грецкого ореха с латеральным плодоношением
                                    </h2>
                                    <div className="mt-20 mb-20"  data-swiper-parallax="-600" data-swiper-parallax-duration="1000">
                                        <a 
                                            target="_blank"
                                            className="youtube-link"
                                            // href="https://www.youtube.com/watch?v=PtNufHABafU&feature=youtu.be">Посмотреть видео на youtube</a>
                                            href="https://youtu.be/iOoPp3GjVrE">Посмотреть видео на youtube</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className="swiper-slide" style={{ backgroundImage: `url(${slider__item_2})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Семилетний ореховый сад
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 */}
                    <div className="swiper-slide" style={{ backgroundImage: `url(${slider__item_3})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Однолетний сад
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 */}
                    <div className="swiper-slide" style={{ backgroundImage: `url(${slider__item_4})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Однолетние саженцы <br /> грецкого ореха
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 5 */}
                    <div className="swiper-slide" style={{ backgroundImage: `url(${slider__item_5})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Саженцы грецкого ореха, <br /> подготовленные к продаже
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* 6 */}
                    <div className="swiper-slide" style={{ backgroundImage: `url(${slider__item_6})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                        Орех грецкий на продажу
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


const mapStateToProps = (state) => {
    return { ...state }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onDeltaYhandler: (param) => {
            dispatch(deltaLayer(param.deltaY));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(slider);