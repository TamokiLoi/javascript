import * as TYPES from '../constants/ActionTypes';
import { findIndex } from 'lodash';

var s4 = () => { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
var randomId = () => { return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4(); }
var findIndexId = (tasks, id) => { return findIndex(tasks, (task) => { return task.id === id; }); }
var onSaveLocalStorage = (tasks) => { localStorage.setItem('tasks', JSON.stringify(tasks)); }

var tasks = JSON.parse(localStorage.getItem('tasks'));
var initialState = tasks ? tasks : [];

var tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.LIST_TASK:
            return state;
        case TYPES.SAVE_TASK:
            var task = action.task;
            if (task.id) {
                var index = findIndexId(state, task.id);
                if (index !== -1) state[index] = task;
            } else {
                if (task.name) {
                    task.id = randomId();
                    state.push(task);
                }
            }
            onSaveLocalStorage(state);
            return [...state];
        case TYPES.UPDATE_STATUS_TASK:
            index = findIndexId(state, action.id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    status: !state[index].status
                }
                onSaveLocalStorage(state);
            };
            return [...state];
        case TYPES.DELETE_TASK:
            if (findIndexId(state, action.id) !== -1) state = state.filter(task => task.id !== action.id);
            onSaveLocalStorage(state);
            return [...state];
        default:
            return state;
    }
}

export default tasksReducer;