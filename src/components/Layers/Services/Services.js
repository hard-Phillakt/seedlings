import React from 'react';
import { connect } from 'react-redux';
import deltaLayer from '../../../actions/layers';
import getServices from '../../../actions/getServices';
import getServicesProd from '../../../actions/getServicesProd';
import getServicesProdId from '../../../actions/getServicesProdId';

import './Services.scss';
// import servicesOne from './services_one/img/services_one.png';
import ButtonRub from '../../Ui/button/ButtonRub';


class Services extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <section className="services">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-6 flex-stretching" onWheel={(e) => (this.props.onDeltaYhandler(e))}>

                            <div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <h3 className="title title__h3 fs-30 c-green-b" onClick={() => (this.props.onGetServicesHandler())}>Услуги</h3>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="title title__h3 fs-30 c-green-b" onClick={() => (this.props.onGetServicesProdHandler())}>Товары для сада</h3>
                                    </div>
                                </div>


                                <div className="services__desc mt-90">

                                    {

                                        this.props.services.viewServices.map((item, i) => {

                                            if (this.props.services.view === 'SERVICES') {

                                                return (
                                                    <div key={item.title} dangerouslySetInnerHTML={{ __html: item.text }}></div>
                                                )

                                            } else {

                                                return (
                                                    <ul key={item.title}>
                                                        <li>
                                                            <a href="#!" onClick={() => (this.props.onGetServicesProdIdHandler(item.title))} 
                                                            className={ item.active ? 'link mb-20 c-green-b mr-20 fs-24 asortiment-list-items-active' : 'link mb-20 c-green-b mr-20 fs-24' }>
                                                                {item.title}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )

                                            }

                                        })

                                    }

                                </div>

                            </div>

                            <div className="row">
                                <div className="col-lg-7">
                                    <ButtonRub />
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="services-box">
                                {/* Выводим картинку */}

                                {
                                    this.props.services.servicesProductsId.title ?
                                        <div>
                                            <div className="services-box__img img-res" style={{ height: 400, backgroundImage: `url(${this.props.services.servicesProductsId.img})` }}>

                                            </div>
                                            <div className="asortiment-box__desc">
                                                <div className="asortiment-box__desc_scroll mt-30">
                                                    {/* Выводим текст */}
                                                    {this.props.services.servicesProductsId.text}
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div className="services-box__img img-res" style={{ backgroundImage: `url(${this.props.services.viewServices[0].img})` }}></div>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onDeltaYhandler: (param) => {
            dispatch(deltaLayer(param.deltaY));
        },
        onGetServicesHandler: (param) => {
            dispatch(getServices(param))
        },
        onGetServicesProdHandler: (param) => {
            dispatch(getServicesProd(param))
        },
        onGetServicesProdIdHandler: (param) => {
            dispatch(getServicesProdId(param))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);