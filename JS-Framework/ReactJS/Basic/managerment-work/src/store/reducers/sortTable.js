import * as TYPES from '../constants/ActionTypes';

var initialState = { by: 'name', value: 1 };

var sortTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SORT_TABLE:
            console.log(action)
            return action.sort;
        default:
            return state;
    }
}

export default sortTableReducer;