import * as TYPES from '../constants/ActionTypes';

var initialState = false;

var isDisplayFormReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.TOGGLE_FORM:
            return !state;
        case TYPES.OPEN_FORM:
            return true;
        case TYPES.CLOSE_FORM:
            return false;
        default:
            return state;
    }
}

export default isDisplayFormReducer;