import * as TYPES from '../constants/ActionTypes';

var initialState = false;

var statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_STATUS:
            return state = !state;
        default:
            return state;
    }
}

export default statusReducer;