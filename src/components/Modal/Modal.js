import React from 'react';
import { connect } from 'react-redux';
import viewModal from '../../actions/viewModal';

import './Modal.scss';
import phone from './icon/icon-phone.svg';
import form from './icon/icon-form.svg';
import times from './icon/times.svg';

// import ButtonRub from '../Ui/button/ButtonRub';
import ButtonArr from '../Ui/button/ButtonArr';



class Modal extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            // <div className="modal-wrapp modal-hidden">
            // onClick={() => (this.props.onViewModalHandler())}
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
                                <div className="col-lg-4 offset-lg-2">
                                    <div className="mb-40 mt-40">
                                        <h3 className="title title__h3 fs-30 c-green-b tac">Форма заявки</h3>
                                    </div>

                                    <div className="tac">
                                        <img src={phone} />
                                    </div>

                                    <div className="description description__md fs-14 c-black-light mt-20 tac">
                                        Чтобы узнать стоимость <br />
                                        интересующих вас товаров/услуг <br />
                                        закажите обратный звонок
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="mb-40 mt-40">
                                        <h3 className="title title__h3 fs-30 c-green-b">Обратный звонок</h3>
                                    </div>

                                    <form>
                                        <p>
                                            <input type="text" className="field field-text" placeholder="Введите имя" />
                                        </p>

                                        <p>
                                            <input type="text" className="field field-text" placeholder="Введите телефон" />
                                        </p>

                                        <p>
                                            <input type="text" className="field field-text" placeholder="Введите email" />
                                        </p>

                                        <p>
                                            <textarea type="textarea" className="field field-textarea" placeholder="Введите комментарий" ></textarea>
                                        </p>

                                    </form>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="fjc-c mt-30 mb-30">
                                        <ButtonArr />
                                    </div>
                                </div>
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Modal);