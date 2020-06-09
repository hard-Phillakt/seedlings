import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Walnut from '../Walnut/Walnut';
import Hazelnut from '../Hazelnut/Hazelnut';
import ApplePear from '../Apple-Pear/ApplePear';
import RaspberryBlackberry from '../Raspberry-Blackberry/RaspberryBlackberry';

const menuProd = () => {

    return (
        <nav className="asortiment-menu mt-20">

            <Switch>
                <Route path="/walnut" exact component={Walnut} />
                <Route path="/hazelnut" exact component={Hazelnut} />
                <Route path="/applePear" exact component={ApplePear} />
                <Route path="/raspberryBlackberry" exact component={RaspberryBlackberry} />
            </Switch>

            <ul className="fjc-s">
                <li>
                    <NavLink to="/walnut" className="link mr-20 fs-18 asortiment-menu-active">Грецкий орех</NavLink>
                </li>
                <li>
                    <NavLink to="/hazelnut" className="link mr-20 c-gray-b fs-18">Фундук</NavLink>
                </li>
                <li>
                    <NavLink to="/applePear" className="link mr-20 c-gray-b fs-18">Яблони/Груши</NavLink>
                </li>
                <li>
                    <NavLink to="/raspberryBlackberry" className="link mr-20 c-gray-b fs-18">Малина/Ежевика</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default menuProd;


