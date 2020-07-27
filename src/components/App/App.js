import React from 'react';
import { connect } from 'react-redux';
import gsap from "gsap";

import deltaLayer from '../../actions/layers';

import './App.scss';
import '../../../node_modules/bootstrap-4-grid/css/grid.min.css';

//  My Ui components scss
import '../Ui/color/index.scss';
import '../Ui/indentation/index.scss';
import '../Ui/flex/index.scss';
import '../Ui/fs/index.scss';
import '../Ui/title/index.scss';
import '../Ui/link/index.scss';
import '../Ui/description/index.scss';
import '../Ui/form/index.scss';
import '../Ui/link/index.scss';

//  My Ui components fonts
import '../Ui/fonts/Boomboom/index.css';
import '../Ui/fonts/Consolas/index.css';

//  My Ui components js
import '../Ui/button/ButtonRub.js';
import '../Ui/form/index.js';

//  Layers components
import Menu from '../Layers/Menu/Menu';
import Main from '../Layers/Main/Main';
import Slider from '../Layers/Slider/Slider';
import Asortiment from '../Layers/Asortiment/Asortiment';
import Services from '../Layers/Services/Services';
import ServicesDesc from '../Layers/ServicesDesc/ServicesDesc';
import Product from '../Layers/Product/Product';
import Contact from '../Layers/Contact/Contact';
import Modal from '../../components/Modal/Modal';
import Dots from '../../components/Dots/Dots';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.refLayers = React.createRef();
    }


    onScrollhandler(layers) {

        if (layers) {

            const layersArr = layers.childNodes;
            const count = this.props.layers.count;

            gsap.to(layersArr[count], { y: `0%`, duration: .6, opacity: 1, display: 'block' });

            for (let i = 0; i < layersArr.length; i++) {

                if (count !== i) {
                    gsap.to(layersArr[i], { y: `100%`, duration: .6, opacity: 0, display: 'none' });
                }

            }

        }

    }

    render() {

        //  Ждем пока DOM отрендерится (костыль)
        setTimeout(() => {

            // Убираем одноэкранники для ноутбуков и мобильных
            if(window.innerWidth > 14000){
                this.onScrollhandler(this.refLayers.current)
            }

        }, 100)

        return (
            <section className="App">
                <Menu />
                <section className="all-layers" ref={this.refLayers} >
                    <Main />
                    <Slider />
                    <Asortiment />
                    <Product />
                    <Services />
                    <ServicesDesc />
                    <Contact />
                </section>
                <Modal />
                <Dots />
                <div className="toggle-menu_wrap">
                    <div className="toggle-menu">
                        <span></span>
                        <span></span>
                        <span></span>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);