import status from './status';
import sort from './sort';
import { combineReducers } from 'redux';

const mainReducer = combineReducers({ status, sort });

export default mainReducer;