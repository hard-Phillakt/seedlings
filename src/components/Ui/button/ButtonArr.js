import React from 'react';

import { connect } from 'react-redux';

import clearForm from '../../../actions/clearForm';

import './index.scss';
import arr from './icon/btn-arrow-bottom.svg';

const ButtonArr = (props) => {

    const ajaxSendHandler = () => {

        if (props.typeForm === 'phone') {
            if (props.data.name && props.data.tel) {
                console.log('ajax phone');
                props.onClearFormHandler()
            }
        }

        if (props.typeForm === 'form') {
            if (props.data.name && props.data.tel && props.data.email && props.data.comment) {
                console.log('ajax form');
                props.onClearFormHandler()
            }
        }
    }

    return (
        <div className="button button-arr" onClick={() => (ajaxSendHandler())}>
            <a href="#!" className="fjc-c fai-c">
                <img src={arr} alt="arr" />
                <span>Заказать</span>
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
        onClearFormHandler: () => {
            dispatch(clearForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonArr);