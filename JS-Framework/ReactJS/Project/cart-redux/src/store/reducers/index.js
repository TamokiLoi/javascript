import { combineReducers } from 'redux';
import products from './products';

const mainReducer = combineReducers({ products, });

export default mainReducer;