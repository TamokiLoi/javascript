import * as TYPES from '../constants/ActionType';

export const addToCart = (product, quantity) => { return { type: TYPES.ADD_TO_CART, product, quantity } };
export const updateCart = (product, quantity) => { return { type: TYPES.UPDATE_CART, product, quantity } };