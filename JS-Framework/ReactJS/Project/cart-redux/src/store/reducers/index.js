import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';

const mainReducer = combineReducers({ products, cart });

export default mainReducer;