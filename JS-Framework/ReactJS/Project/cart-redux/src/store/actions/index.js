import * as TYPES from '../constants/ActionType';

export const addToCart = (product, quantity) => { return { type: TYPES.ADD_TO_CART, product, quantity } };
export const updateProductInCart = (product, quantity) => { return { type: TYPES.UPDATE_PRODUCT_IN_CART, product, quantity } };
export const deleteProductInCart = (product) => { return { type: TYPES.DELETE_PRODUCT_IN_CART, product } };
export const changeMessage = (message) => { return { type: TYPES.CHANGE_MESSAGE, message } };