import { combineReducers } from 'redux';
import layers from './layers';
import assort from './assort';
import services from './services';
import modal from './modal';

export default combineReducers({
    layers, assort, services, modal
});