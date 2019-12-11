import * as TYPES from '../constants/ActionTypes';

var findIndex = (products, id) => {
    var result = -1;
    products.forEach((product, index) => {
        if (product.id === id) {
            result = index;
        }
    });
    return result;
}

var initialState = [];

const products = (state = initialState, action) => {
    var index = -1;
    switch (action.type) {
        case TYPES.FETCH_PRODUCT:
            state = action.products;
            return [...state];
        case TYPES.ADD_PRODUCT:
            state.push(action.product);
            return [...state];
        case TYPES.UPDATE_PRODUCT:
            var { product } = action;
            index = findIndex(state, product.id);
            if (index !== -1) state[index] = product;
            return [...state];
        case TYPES.DELETE_PRODUCT:
            var { id } = action;
            index = findIndex(state, id);
            if (index !== -1) state = state.filter(item => item.id !== id);
            return [...state];
        default:
            return [...state];
    }
}

export default products;