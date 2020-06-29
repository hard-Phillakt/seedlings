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


const slider = (props) => {


    return (
        <section className="slider" onWheel={(e) => (props.onDeltaYhandler(e))}>
            <div className="swiper-container" data-swiper-parallax="-25%">
                <div className="swiper-wrapper">
                    <div className="swiper-slide" style={{ backgroundImage: `url(${item_1})` }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <h2 data-swiper-parallax="-600" data-swiper-parallax-duration="1000" className="title title__h1 fs-62 c-white">
                                    Наличие показательных <br/> интенсивных садов <br/> грецкого ореха с латера
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
                                    Наличие показательных <br/> интенсивных садов <br/> грецкого ореха с латера
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