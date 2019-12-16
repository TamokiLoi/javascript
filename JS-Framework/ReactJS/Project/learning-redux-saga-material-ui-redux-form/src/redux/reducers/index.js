import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import task from './task';
import ui from './ui';
import modal from './modal';

const rootReducer = combineReducers({ task, ui, modal, form: formReducer });

export default rootReducer;
