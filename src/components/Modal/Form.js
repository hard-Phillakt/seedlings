import React from 'react';

import { connect } from 'react-redux';

import  changeInput from '../../actions/changeInput';

import formImg from './icon/icon-form.svg';
import ButtonArr from '../Ui/button/ButtonArr';

const form = (props) => {


    return (
        <div className="col-lg-12">
            <div className="row">
                <div className="col-lg-4 offset-lg-2">

                    <div className="tac">
                        <img src={formImg} alt="form" />
                    </div>

                    <div className="description description__md fs-14 c-black-light mt-20 tac">
                        Чтобы узнать стоимость <br/> 
                        интересующих вас товаров/услуг <br/> 
                        заполните форму-заявку
                    </div>

                </div>

                <div className="col-lg-4">
                    <form>
                        <p>
                            <input type="text" name="form-name" onChange={(e) => (props.onChangeInputHandler(e))} className="field field-text" placeholder="Введите имя" />
                        </p>

                        <p>
                            <input type="text" name="form-tel" onChange={(e) => (props.onChangeInputHandler(e))} className="field field-text" placeholder="Введите телефон +7..." />
                        </p>

                        <p>
                            <input type="text" name="form-email" onChange={(e) => (props.onChangeInputHandler(e))} className="field field-text" placeholder="Введите email" />
                        </p>

                        <p>
                            <textarea type="textarea" name="form-comment" onChange={(e) => (props.onChangeInputHandler(e))} className="field field-textarea" placeholder="Введите комментарий" ></textarea>
                        </p>
                    </form>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="fjc-c mt-30 mb-30">
                        <ButtonArr typeForm="form" data={props.modal.formBox} />
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


export default connect(mapStateToProps, mapDispatchToProps)(form);