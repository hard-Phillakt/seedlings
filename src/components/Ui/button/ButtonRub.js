import React from 'react';
import { connect } from 'react-redux';
import './index.scss';
import rub from './icon/btb-rub.svg';

import viewModal from '../../../actions/viewModal';

const ButtonRub = (props) => {

    return (
        <div className="button button-rub" onClick={() => (props.onViewModalHandler())}>
            <a href="#!" className="fjc-c fai-c">
                <img src={rub} alt="rub" />
                <span>Узнать стоимость</span>
            </a>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onViewModalHandler: (param) => {
            dispatch(viewModal(param));
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonRub);