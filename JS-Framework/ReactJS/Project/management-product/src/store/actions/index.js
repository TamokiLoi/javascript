import * as TYPES from '../constants/ActionTypes';
import callApi from '../../utils/apiCaller';

export const fetchProductRequest = () => {
    return dispatch => {
        return callApi('product', 'GET', null).then(res => {
            dispatch(fetchProduct(res.data));
        });
    };
};
export const fetchProduct = (products) => { return { type: TYPES.FETCH_PRODUCT, products } };

export const getProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/${id}`, 'GET', null).then(res => {
            if (res && res.data) dispatch(getProduct(res.data));
        });
    };
}
export const getProduct = (product) => { return { type: TYPES.EDIT_PRODUCT, product } };

export const saveProductRequest = (product) => {
    return dispatch => {
        if (product.id) {
            return callApi(`product/${product.id}`, 'PUT', product).then(res => {
                if (res && res.data) dispatch(updateProduct(res.data));
            });
        } else {
            return callApi('product', 'POST', product).then(res => {
                if (res && res.data) dispatch(addProduct(res.data));
            });
        }
    };
}
export const addProduct = (product) => { return { type: TYPES.ADD_PRODUCT, product } };
export const updateProduct = (product) => { return { type: TYPES.UPDATE_PRODUCT, product } };

export const deleteProductRequest = (id) => {
    return dispatch => {
        return callApi(`product/${id}`, 'DELETE', null).then(res => {
            if (res.status === 200) dispatch(deleteProduct(id));
        });
    };
}
export const deleteProduct = (id) => { return { type: TYPES.DELETE_PRODUCT, id } };

