import React from 'react';
import '../Asortiment.scss';

import { connect } from 'react-redux';
import deltaLayer from '../../../../actions/layers';

// import walnut from './Walnut/img/walnut__item_1.png';
// import hazelnut from './Hazelnut/img/hazelnut__item_1.png';
import applePearImg from './img/apple-pear__item_1.png';
// import raspberryBlackberry from './Raspberry-Blackberry/img/raspberry-blackberry__item_1.png';

import ButtonRub from '../../../Ui/button/ButtonRub';

const applePear = (props) => {

    return (
        <section className="asortiment">

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


export default connect(mapStateToProps, mapDispatchToProps)(applePear);