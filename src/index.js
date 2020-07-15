import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import rootReduser from './redusers/rootReduser';

import App from './components/App/App';

import './index.css';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReduser, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

var menu_nav__ul_li_a = document.querySelectorAll('.menu-nav__ul_li a ');
var toggle_menu_wrap = document.querySelector('.toggle-menu_wrap');
var menu = document.querySelector('.menu');

toggle_menu_wrap.onclick = function () {

  

  if (menu.classList.value == 'menu') {
    menu.classList.add('open-menu')
    toggle_menu_wrap.classList.add('w-span')
  } else {
    menu.classList.remove('open-menu')
    toggle_menu_wrap.classList.remove('w-span')
  }
}



menu_nav__ul_li_a.forEach((item, i) => {
  item.onclick = function (e) {
      e.preventDefault();

      document.querySelector(this.attributes[1].nodeValue).scrollIntoView({ behavior: 'smooth' });

    // console.dir(this.attributes[1].nodeValue);

    // if (menu.classList.value == 'menu') {
    //   menu.classList.add('open-menu')
    //   toggle_menu_wrap.classList.add('w-span')
    // } else {
    //   menu.classList.remove('open-menu')
    //   toggle_menu_wrap.classList.remove('w-span')
    // }

  }
})






serviceWorker.unregister();
