import React from 'react';
import './App.scss';
import '../../../node_modules/bootstrap-4-grid/css/grid.min.css';

//  My Ui components scss
import '../Ui/color/index.scss';
import '../Ui/indentation/index.scss';
import '../Ui/flex/index.scss';
import '../Ui/fs/index.scss';
import '../Ui/title/index.scss';
import '../Ui/link/index.scss';
import '../Ui/description/index.scss';

//  My Ui components fonts
import '../Ui/fonts/Boomboom/index.css';
import '../Ui/fonts/Consolas/index.css';

//  My Ui components js
import '../Ui/button/ButtonRub.js';
import '../Ui/form/index.js';

//  Layers components
import Menu from '../Layers/Menu/Menu';
import Main from '../Layers/Main/Main';
import Slider from '../Layers/Slider/Slider';
import Asortiment from '../Layers/Asortiment/Asortiment';
import Services from '../Layers/Services/Services';


class App extends React.Component {

    render() {

        return (
            <section className="App">
                <Menu />
                <section className="all-layers">
                    <Main />
                    <Slider />
                    <Asortiment />
                    <Services />
                </section>
            </section>
        )
    }
}

export default App;