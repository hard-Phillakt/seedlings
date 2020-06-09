import React from 'react';
import './Asortiment.scss';

// import MenuProd from './MenuProd/MenuProd';

import { connect } from 'react-redux';
import deltaLayer from '../../../actions/layers';
import getProdItem from '../../../actions/getProdItem';
import getProdItemId from '../../../actions/getProdItemId';

import ButtonRub from '../../Ui/button/ButtonRub';

class Asortiment extends React.Component {
    constructor(props) {
        super(props);

        console.log('Asortiment: ', props);

        this.menu = this.props.assort.menu;
        // this.items = this.props.assort.items;
    }


    //  Выводим по умолчанию категорию walnut
    ifGetItems(param) {

        if (!param.length) {

            this.props.getProdItemsHandler('walnut');

        } else {

            this.props.assort.getItems.map((item, i) => {
                return (
                    <li key={i}>
                        <a href="#!" onClick={() => (this.props.getProdItemsIdHandler(item.title))} className="link mb-20 c-green-b mr-20 fs-24 asortiment-list-items-active">
                            {item.title}
                        </a>
                    </li>
                )
            })
        }

    }

    render() {

        return (
            <section className="asortiment">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-lg-6 flex-stretching" onWheel={(e) => (this.props.onDeltaYhandler(e))}>

                            <div>
                                <h3 className="title title__h3 fs-30 c-green-b">Ассортимент. Саженцы</h3>

                                {/* <MenuProd /> */}

                                <nav className="asortiment-menu mt-20">

                                    <ul className="fjc-s">

                                        {/* Рендерим меню */}
                                        {
                                            this.menu.map((item, i) => {
                                                return (
                                                    <li key={i}>
                                                        <a href="#!" className="link mr-20 c-gray-b fs-18" onClick={() => (this.props.getProdItemsHandler(item.type))}>
                                                            {item.title}
                                                        </a>
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </nav>

                                <div className="mt-90">
                                    <nav className="asortiment-list-items">

                                        {this.ifGetItems(this.props.assort.getItems)}

                                        <ul>
                                            {
                                                this.props.assort.getItems.map((item, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <a href="#!" onClick={() => (this.props.getProdItemsIdHandler(item.title))} className="link mb-20 c-green-b mr-20 fs-24 asortiment-list-items-active">
                                                                {item.title}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>

                                    </nav>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-7">
                                    <ButtonRub />
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="asortiment-box">
                                {/* Выводим картинку */}
                                <div className="asortiment-box__img img-res" style={{ backgroundImage: `url(${this.props.assort.getItemId.img})` }}></div>

                                <div className="asortiment-box__desc">
                                    <div className="asortiment-box__desc_scroll mt-30">
                                        {/* Выводим текст */}
                                        {this.props.assort.getItemId.text}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
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
        getProdItemsHandler: (param) => {
            dispatch(getProdItem(param));
        },
        getProdItemsIdHandler: (param) => {
            dispatch(getProdItemId(param));
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Asortiment);