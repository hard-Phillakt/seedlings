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
                                        <h3 className="title title__h3 fs-30" onClick={() => (this.props.onGetServicesHandler())}>
                                            <a href="#!" className="c-green-b">Услуги</a>
                                        </h3>
                                    </div>
                                    <div className="col-lg-6">
                                        <h3 className="title title__h3 fs-30" onClick={() => (this.props.onGetServicesProdHandler())}>
                                            <a href="#!" className="c-green-b">Товары для сада</a>
                                        </h3>
                                    </div>
                                </div>


                                <div className={this.props.services.view === 'SERVICES' ? 'services__desc mt-90' : 'services__desc mt-90' }>

                                    {

                                        this.props.services.viewServices.map((item, i) => {

                                            if (this.props.services.view === 'SERVICES') {

                                                return(
                                                        <ul key={item.title}>
                                                            {
                                                                item.servicesItems.map((item, i ) => {
                                                                    {/* console.log(item.title); */}

                                                                    return (
                                                                        <li key={item.title} >
                                                                            <a 
                                                                            className="fs-24"
                                                                            href="#!" 
                                                                            dangerouslySetInnerHTML={{ __html:  item.title }}
                                                                            onClick={() => (this.props.onGetServicesItemHandler(i))}
                                                                            ></a>
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    )

                                            } else {

                                                return (
                                                    <ul key={item.title}>
                                                        <li>
                                                            <a href="#!" onClick={() => (this.props.onGetServicesProdIdHandler(item.title))}
                                                                className={item.active ? 'link mr-20 fs-24 asortiment-list-items-active' : 'link mr-20 fs-24'}>
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
        },
        onGetServicesItemHandler: (param) => {

            // console.log(param);
            
            dispatch({type: 'GET_SERVICES_ITEM', param})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Services);