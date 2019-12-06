import * as TYPE from '../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));
var initialState = data ? data : [];

const cart = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADD_TO_CART:
            saveCart(state, action);
            return [...state];
        case TYPE.UPDATE_CART:
            console.log(action)
            saveCart(state, action);
            return [...state];
        default:
            return [...state];
    }
}

var findProductInCart = (cart, product) => {
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

var saveCart = (cart, action) => {
    var { product, quantity } = action;
    var index = -1;
    index = findProductInCart(cart, product);
    if (index !== -1) {
        cart[index].quantity += quantity;
    } else {
        cart.push({
            product,
            quantity,
        })
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

export default cart;