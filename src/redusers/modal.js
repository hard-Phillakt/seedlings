import applePear from '../components/Layers/Asortiment/Apple-Pear/img/apple-pear__item_1.png';
import raspberryBlackberry from '../components/Layers/Asortiment/Raspberry-Blackberry/img/raspberry-blackberry__item_1.png';
import servicesOne from '../components/Layers/Services/services_one/img/services_one.png';

const initToggleBlocks = {
    view: false,
}

const services = (state = initToggleBlocks, action) => {

    switch (action.type) {
        case 'MODAL_VIEW':
            
        if(state.view){
            state.view = false
        }else {
            state.view = true
        }
        
        return {
            ...state,
            view: state.view
        }

        default:
            return {
                ...state
            }
    }
}

export default services;