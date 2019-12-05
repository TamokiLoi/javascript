import * as TYPES from '../constants/ActionTypes';

var initialState = { name: '', status: -1 };

var filterTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.FILTER_TABLE:
                console.log(action)
            return {
                name: action.filter.name ? action.filter.name : initialState.name,
                status: action.filter.status ? parseInt(action.filter.status) : initialState.status
            };
        default:
            return state;
    }
}

export default filterTableReducer;