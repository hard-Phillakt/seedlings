import React from 'react';
import './index.scss';
import rub from './icon/btb-rub.svg';

const ButtonRub = () => {


    return (
        <div className="button button-rub">
            <a href="#!" className="fjc-c fai-c">
                <img src={rub} alt="rub" />
                <span>Узнать стоимость</span>
            </a>
        </div>
    )
}

export default ButtonRub;