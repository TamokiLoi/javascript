import * as TYPES from '../constants/ActionTypes';

var initialState = {
    by: 'name',
    value: 1
}

var sortReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.SORT:
            return action.sort;
        default:
            return state;
    }
}

export default sortReducer;