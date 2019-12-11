import * as TYPES from '../constants/ActionTypes';

var initialState = {};

const product = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default product;