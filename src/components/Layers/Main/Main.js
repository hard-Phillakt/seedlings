import React from 'react';
import { connect } from 'react-redux';
import deltaLayer from '../../../actions/layers';
import toggleLayers from '../../../actions/toggleLayers';
import '../Main/Main.scss';

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <section id="main" className="main" onWheel={ window.innerWidth > 1400 ? (e) => (this.props.onDeltaYhandler(e)) : null }>
            {/* <section className="main" > */}
                <div className="main-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="title title__h1 c-white fs-62 tac">Продажа сертифицированных привитых саженцев грецкого ореха</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 tac">
                            <div className="mt-50 mb-50 pl-30 pt-10 pb-10">
                                <div className="description description__md fs-26 c-black-light mb-10">
                                    Поставка саженцев грецкого ореха из специализированного <br/>
                                    орехового питомника более чем с 20-ти летним опытом селекционной работы
                                </div>

                                <div className="description description__md fs-26 c-black-light mb-10">
                                    Гарантия приживаемости и соответствия сорта
                                </div>
                                <div className="description description__md fs-26 c-black-light mb-10">
                                    Услуги по созданию и реализации проекта орехового сада
                                </div>
                                {/* <div className="description description__md fs-26 c-black-light">
                                    Белгородский район, с Никольское, ул. Пролетарская, з/у 18.
                                </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);