import * as TYPES from '../constants/ActionTypes';

export const status = () => {
    return { type: TYPES.TOGGLE_STATUS }
}

export const sort = (sort) => {
    return { type: TYPES.SORT, sort }
}