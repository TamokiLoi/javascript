import * as TYPE from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    var index = -1;
    var { product, quantity } = action;
    index = findProductInCart(state, action.product);
    switch (action.type) {
        case TYPE.ADD_TO_CART:
            if (index !== -1)
                state[index].quantity += quantity;
            else
                state.push({
                    product,
                    quantity,
                })
            saveToLocalStorage(state);
            return [...state];
        case TYPE.UPDATE_PRODUCT_IN_CART:
            if (index !== -1)
                state[index].quantity = quantity;
            saveToLocalStorage(state);
            return [...state];
        case TYPE.DELETE_PRODUCT_IN_CART:
            if (index !== -1)
                state = state.filter(item => item.product.id !== action.product.id);
            saveToLocalStorage(state);
            return [...state];
        default:
            return [...state];
    }
}

var findProductInCart = (cart, product = {}) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

var saveToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default cart;