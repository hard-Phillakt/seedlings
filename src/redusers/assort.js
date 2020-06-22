
//  Орехи\Грецкие орехи
// import walnut from '../components/Layers/Asortiment/Walnut/img/walnut__item_1.png';
import walnut_1 from '../components/Layers/Asortiment/Walnut/min/walnut__item_1.png'; // Им. Левина_01
import walnut_2 from '../components/Layers/Asortiment/Walnut/min/walnut__item_2.png'; // Казаку_02
import walnut_3 from '../components/Layers/Asortiment/Walnut/min/walnut__item_3.png'; // Кишиневский_03
import walnut_4 from '../components/Layers/Asortiment/Walnut/min/walnut__item_4.png'; // Костюжанский_04
import walnut_5 from '../components/Layers/Asortiment/Walnut/min/walnut__item_5.png'; // Милотай интенсив_05
import walnut_6 from '../components/Layers/Asortiment/Walnut/min/walnut__item_6.png'; // Песчанский_06
import walnut_7 from '../components/Layers/Asortiment/Walnut/min/walnut__item_7.png'; // Скиносский_07
import walnut_8 from '../components/Layers/Asortiment/Walnut/min/walnut__item_8.png'; // Фернор_08
import walnut_9 from '../components/Layers/Asortiment/Walnut/min/walnut__item_9.png'; // Чандлер_09

// Фундук
// import hazelnut from '../components/Layers/Asortiment/Hazelnut/img/hazelnut__item_1.png';
import hazelnut_1 from '../components/Layers/Asortiment/Hazelnut/min/hazelnut__item_1.png'; // Адыгейский_01
import hazelnut_2 from '../components/Layers/Asortiment/Hazelnut/min/hazelnut__item_2.png'; // Черкесский_02

// Яблони
// import applePear from '../components/Layers/Asortiment/Apple-Pear/img/apple-pear__item_1.png';
import applePear_1 from '../components/Layers/Asortiment/Apple-Pear/min/apple-pear__item_1.png'; // Супер-чиф
import applePear_2 from '../components/Layers/Asortiment/Apple-Pear/min/apple-pear__item_2.png'; // Яблоня Айдарет
import applePear_3 from '../components/Layers/Asortiment/Apple-Pear/min/apple-pear__item_3.png'; // Яблоня Гала
import applePear_4 from '../components/Layers/Asortiment/Apple-Pear/min/apple-pear__item_4.png'; // Яблоня Грани Смит
import applePear_5 from '../components/Layers/Asortiment/Apple-Pear/min/apple-pear__item_5.png'; // Яблоня Ред фри
import applePear_6 from '../components/Layers/Asortiment/Apple-Pear/min/apple-pear__item_6.png'; // Яблоня Чемпион


// Малина,Ежевика
// import raspberryBlackberry from '../components/Layers/Asortiment/Raspberry-Blackberry/img/raspberry-blackberry__item_1.png';
import raspberryBlackberry_1 from '../components/Layers/Asortiment/Raspberry-Blackberry/min/raspberry-blackberry__item_1.png'; // Ежевика Блек Меджик
import raspberryBlackberry_2 from '../components/Layers/Asortiment/Raspberry-Blackberry/min/raspberry-blackberry__item_1.png'; // Ежевика Честер Торнлесс
import raspberryBlackberry_3 from '../components/Layers/Asortiment/Raspberry-Blackberry/min/raspberry-blackberry__item_1.png'; // Малина Геракл ремонтантная
import raspberryBlackberry_4 from '../components/Layers/Asortiment/Raspberry-Blackberry/min/raspberry-blackberry__item_1.png'; // Малина Гигант Московский
import raspberryBlackberry_5 from '../components/Layers/Asortiment/Raspberry-Blackberry/min/raspberry-blackberry__item_1.png'; // Малина Полесье ремонтантная



//  Продукты Product

import product__item_1 from '../components/Layers/Product/min/product__item_1.png'; // Орех Чищенный
import product__item_2 from '../components/Layers/Product/min/product__item_2.png'; // Орехи не чищенные
import product__item_3 from '../components/Layers/Product/min/product__item_3.png'; // Чеснок не чищенный
import product__item_4 from '../components/Layers/Product/min/product__item_4.png'; // Чеснок чищеный
import product__item_5 from '../components/Layers/Product/min/product__item_5.png'; // Яблоки





const initState = {
    menu: [{
        title: "Грецкий орех",
        type: "walnut"
    },
    {
        title: "Фундук",
        type: "hazelnut"
    },
    {
        title: "Яблони/Груши",
        type: "apple-pear"
    },
    {
        title: "Малина/Ежевика",
        type: "raspberry-blackberry"
    }],
    items: [
        //  Грецкий орех ################################################
        {
            title: "Им. Левина",
            type: "walnut",
            img: `${walnut_1}`,
            active: true,
            text: `Им. Левина`
        },
        {
            title: "Казаку",
            type: "walnut",
            img: `${walnut_2}`,
            text: `Казаку`
        },
        {
            title: "Кишиневский",
            type: "walnut",
            img: `${walnut_3}`,
            text: `Кишиневский`
        },
        {
            title: "Костюжанский",
            type: "walnut",
            img: `${walnut_4}`,
            text: `Костюжанский`
        },
        {
            title: "Милотай интенсив",
            type: "walnut",
            img: `${walnut_5}`,
            text: `Милотай интенсив`
        },
        {
            title: "Песчанский",
            type: "walnut",
            img: `${walnut_6}`,
            text: `Песчанский`
        },
        {
            title: "Скиносский",
            type: "walnut",
            img: `${walnut_7}`,
            text: `Скиносский`
        },
        {
            title: "Фернор",
            type: "walnut",
            img: `${walnut_8}`,
            text: `Фернор`
        },
        {
            title: "Чандлер",
            type: "walnut",
            img: `${walnut_9}`,
            text: `Чандлер`
        },

        // Фундук ################################################
        {
            title: "Адыгейский",
            type: "hazelnut",
            img: `${hazelnut_1}`,
            active: true,
            text: `Адыгейский`
        },
        {
            title: "Черкесский",
            type: "hazelnut",
            img: `${hazelnut_2}`,
            text: `Черкесский`
        },

        // Яблони/Груши ################################################
        {
            title: "Супер Чиф",
            type: "apple-pear",
            img: `${applePear_1}`,
            active: true,
            text: `Супер Чиф`
        },
        {
            title: "Яблоня Айдарет",
            type: "apple-pear",
            img: `${applePear_2}`,
            text: `Яблоня Айдарет`
        },
        {
            title: "Яблоня Гала",
            type: "apple-pear",
            img: `${applePear_3}`,
            text: `Яблоня Гала`
        },
        {
            title: "Яблоня Грани Смит",
            type: "apple-pear",
            img: `${applePear_4}`,
            text: `Яблоня Грани Смит`
        },
        {
            title: "Яблоня Ред фри",
            type: "apple-pear",
            img: `${applePear_5}`,
            text: `Яблоня Ред фри`
        },
        {
            title: "Яблоня Чемпион",
            type: "apple-pear",
            img: `${applePear_6}`,
            text: `Яблоня Чемпион`
        },

        // Малина/Ежевика ################################################
        {
            title: "Ежевика Блек Меджик",
            type: "raspberry-blackberry",
            img: `${raspberryBlackberry_1}`,
            active: true,
            text: `Ежевика Блек Меджик`
        },
        {
            title: "Ежевика Честер Торнлесс",
            type: "raspberry-blackberry",
            img: `${raspberryBlackberry_2}`,
            text: `Ежевика Честер Торнлесс`
        },
        {
            title: "Малина Геракл ремонтантная",
            type: "raspberry-blackberry",
            img: `${raspberryBlackberry_3}`,
            text: `Малина Геракл ремонтантная`
        },
        {
            title: "Малина Гигант Московский",
            type: "raspberry-blackberry",
            img: `${raspberryBlackberry_4}`,
            text: `Малина Гигант Московский`
        },
        {
            title: "Малина Полесье ремонтантная",
            type: "raspberry-blackberry",
            img: `${raspberryBlackberry_5}`,
            text: `Малина Полесье ремонтантная`
        },
    ],
    getItems: [
        {
            title: "Им. Левина",
            type: "walnut",
            img: `${walnut_1}`,
            active: true,
            text: `Им. Левина`
        },
        {
            title: "Казаку",
            type: "walnut",
            img: `${walnut_2}`,
            text: `Казаку`
        },
        {
            title: "Кишиневский",
            type: "walnut",
            img: `${walnut_3}`,
            text: `Кишиневский`
        },
        {
            title: "Костюжанский",
            type: "walnut",
            img: `${walnut_4}`,
            text: `Костюжанский`
        },
        {
            title: "Милотай интенсив",
            type: "walnut",
            img: `${walnut_5}`,
            text: `Милотай интенсив`
        },
        {
            title: "Песчанский",
            type: "walnut",
            img: `${walnut_6}`,
            text: `Песчанский`
        },
        {
            title: "Скиносский",
            type: "walnut",
            img: `${walnut_7}`,
            text: `Скиносский`
        },
        {
            title: "Фернор",
            type: "walnut",
            img: `${walnut_8}`,
            text: `Фернор`
        },
        {
            title: "Чандлер",
            type: "walnut",
            img: `${walnut_9}`,
            text: `Чандлер`
        },
    ],
    getItemId: {
        title: "Им. Левина",
        type: "walnut",
        img: `${walnut_1}`,
        active: true,
        text: `Им. Левина`
    },






    // Отдельные продукты на странице "Продукция" ############################################
    getItemSelect: [
        {
            title: "Орех Чищенный",
            img: `${product__item_1}`,
            active: true,
            text: `Орех Чищенный`
        },
        {
            title: "Орехи не чищенные",
            img: `${product__item_2}`,
            text: `Орехи не чищенные`
        },
        {
            title: "Чеснок не чищенный",
            img: `${product__item_3}`,
            text: `Чеснок не чищенный`
        },
        {
            title: "Чеснок чищеный",
            img: `${product__item_4}`,
            text: `Чеснок чищеный`
        },
        {
            title: "Яблоки",
            img: `${product__item_5}`,
            text: `Яблоки`
        },
    ],

    // По умолчанию выводим первый продукт
    getItemsSelectId:
    {
        title: "Орех Чищенный",
        img: `${product__item_1}`,
        active: true,
        text: `Орех Чищенный`
    },
}






const assort = (state = initState, action) => {

    switch (action.type) {
        case 'GET_PROD_ITEM':

            //  Очищаем item от active class
            state.items.map((item, i) => {

                item.active = false;
            });

            const items = state.items.filter((item, i) => {

                if (item.type === action.param) {
                    return item;
                }
            });

            //  При переключении в меню "Ассортимент" 
            items[0].active = true

            return {
                ...state,
                getItems: items,
                getItemId: items[0]
            }

        case 'GET_PROD_ITEM_ID':

            //  Очищаем item от active class
            state.items.map((item, i) => {

                item.active = false;
            });

            const itemId = state.items.find((item, i) => {

                if (item.title === action.param) {

                    return item.active = true;
                }
            });

            return {
                ...state,
                getItemId: itemId
            }


        case 'GET_PROD_SELECT':

            //  Очищаем item от active class
            state.getItemSelect.map((item, i) => {

                item.active = false;
            });

            const itemSelect = state.getItemSelect.find((item, i) => {

                if (item.title === action.param) {
                    return item.active = true;
                }
            });

            return {
                ...state,
                getItemsSelectId: itemSelect,
            }
    }

    return {
        ...state
    }
}

export default assort;