import React from 'react';
import { connect } from 'react-redux';

import  changeInput from '../../actions/changeInput';

import phoneImg from './icon/icon-phone.svg';
import ButtonArr from '../Ui/button/ButtonArr';

const phone = (props) => {
    
    return (
        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-4 offset-lg-2">

                    <div className="tac">
                        <img src={phoneImg} alt="phone" />
                    </div>

                    <div className="description description__md fs-14 c-black-light mt-20 tac">
                        Чтобы узнать стоимость <br />
                        интересующих вас товаров/услуг <br />
                        закажите обратный звонок
                    </div>

                </div>

                <div className="col-lg-4">
                    <form>
                        <p>
                            <input type="text" name="phone-name" onChange={(e) => (props.onChangeInputHandler(e))} className="field field-text" placeholder="Введите имя" />
                        </p>

                        <p>
                            <input type="text" name="phone-tel" onChange={(e) => (props.onChangeInputHandler(e))} className="field field-text" placeholder="Введите телефон +7..." />
                        </p>
                    </form>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-12">
                    <div className="fjc-c mt-30 mb-30">
                        <ButtonArr typeForm="phone" data={props.modal.phoneBox} />
                    </div>
                </div>
            </div>
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
        onChangeInputHandler: (param) => {

            let name = param.target.name;
            let value = param.target.value;

            dispatch(changeInput(name, value));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(phone);