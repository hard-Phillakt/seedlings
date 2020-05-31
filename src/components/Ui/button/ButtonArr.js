import React from 'react';
import './index.scss';
import arr from './icon/btn-arrow-bottom.svg';

const ButtonArr = () => {


    return (
        <div className="button button-arr">
            <a href="#!" className="fjc-c fai-c">
                <img src={arr} alt="arr" />
                <span>Заказать</span>
            </a>
        </div>
    )
}

export default ButtonArr;