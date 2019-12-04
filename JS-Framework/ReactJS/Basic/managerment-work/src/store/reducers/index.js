import { combineReducers } from 'redux';
import tasks from './tasks';
import taskEditing from './taskEditing';
import isDisplayForm from './isDisplayForm';
import filter from './filterTable';
import sort from './sortTable';

const mainReducer = combineReducers({ tasks, taskEditing, isDisplayForm, filter, sort });

export default mainReducer;