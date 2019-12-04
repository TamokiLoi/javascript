import * as TYPES from '../constants/ActionTypes';

var initialState = { name: '', status: -1 };

var filterTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FILTER_TABLE:
            return action.filter;
        default:
            return state;
    }
}

export default filterTableReducer;