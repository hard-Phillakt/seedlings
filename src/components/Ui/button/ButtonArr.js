import React from 'react';
import { connect } from 'react-redux';
import clearForm from '../../../actions/clearForm';
import $ from 'jquery';

import './index.scss';
import arr from './icon/btn-arrow-bottom.svg';

const ButtonArr = (props) => {

    const ajaxSendHandler = () => {

        if (props.typeForm === 'phone') {
            if (props.data.name && props.data.tel) {
                console.log('ajax phone');

                console.log('phoneBox: ', props.modal.phoneBox);

                $.ajax({
                    method: 'GET',
                    url: 'http://orekh31/mailer',
                    data: {
                        name: props.modal.phoneBox.name,
                        tel: props.modal.phoneBox.tel
                    },
                    dataType: 'jsonp',
                    crossDomain: true,
                    success: function (res) {
                        console.log(res);

                    },
                    error: function (err) {
                        console.log(err);

                    }
                })

                props.onClearFormHandler()
            }
        }

        if (props.typeForm === 'form') {
            if (props.data.name && props.data.tel && props.data.email && props.data.comment) {
                console.log('ajax form');

                console.log('formBox: ', props.modal.formBox);

                $.ajax({
                    method: 'GET',
                    url: 'http://orekh31/mailer',
                    data: {
                        comment: props.modal.formBox.comment,
                        email: props.modal.formBox.email,
                        name: props.modal.formBox.name,
                        tel: props.modal.formBox.tel,
                    },
                    dataType: 'jsonp',
                    crossDomain: true,
                    success: function (res) {
                        console.log(res);

                    },
                    error: function (err) {
                        console.log(err);

                    }
                })

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