import * as TYPES from '../constants/ActionTypes';

var initialState = {};

var taskEditingReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TASK_EDITING:
            return action.task;
        default:
            return state;
    }
}

export default taskEditingReducer;