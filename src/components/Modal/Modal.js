import React from 'react';
import { connect } from 'react-redux';
import viewModal from '../../actions/viewModal';
import toggleComponentsModal from '../../actions/toggleComponentsModal';

import './Modal.scss';

import times from './icon/times.svg';

// import ButtonRub from '../Ui/button/ButtonRub';
// import ButtonArr from '../Ui/button/ButtonArr';

import Phone from './Phone';
import Form from './Form';
import Success from './Success';

class Modal extends React.Component {
    constructor(props) {
        super(props)
    }


    viewCompon(param) {
        // console.log(param);

        switch (param) {
            case 'phone':
                return (<Phone />)

            case 'form':
                return (<Form />)

            case 'success':
                return (<Success />)
        }
    }

    render() {
        return (

            <div className={this.props.modal.view ? 'modal-wrapp modal-visible' : 'modal-wrapp modal-hidden'} >
                <div className="modal-border">
                    <div className="modal">
                        <div className="container">
                            <div className="row">

                                <div className="col-lg-12">
                                    <span className="modal-times" onClick={() => (this.props.onViewModalHandler())}>
                                        <img src={times} alt="modal-times" />
                                    </span>
                                </div>

                                {/* Modal Menu */}
                                <div className="col-lg-10 offset-lg-2">

                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="mb-40 mt-40">
                                                <h3 className="title title__h3 fs-30 tac">
                                                    <a href="#!" className="c-green-b" onClick={() => (this.props.onToggleComponentsModal('form'))} >Форма заявки</a>
                                                </h3>
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="mb-40 mt-40">
                                                <h3 className="title title__h3 fs-30">
                                                    <a href="#!" className="c-green-b" onClick={() => (this.props.onToggleComponentsModal('phone'))} >Обратный звонок</a>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {this.viewCompon(this.props.modal.viewBox)}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
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
        onViewModalHandler: (param) => {
            dispatch(viewModal(param));
        },
        onToggleComponentsModal: (param) => {
            dispatch(toggleComponentsModal(param));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);