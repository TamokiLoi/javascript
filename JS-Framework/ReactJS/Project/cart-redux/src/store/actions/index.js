import * as TYPES from '../constants/ActionType';

export const addToCart = (product, quantity) => { return { type: TYPES.ADD_TO_CART, product, quantity } };