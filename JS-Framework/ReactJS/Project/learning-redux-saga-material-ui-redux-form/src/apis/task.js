import qs from 'query-string';
import axiosService from '../common/services/axiosService';
import { API_ENDPOINT } from '../common/constants/index';

const url = 'task';

export const getList = (params = {}) => {
	let queryParams = '';
	if (Object.keys(params).length > 0) queryParams = `?${qs.stringify(params)}`;
	return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addTask = data => {
	return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};

export const updateTask = (id, data) => {
	return axiosService.put(`${API_ENDPOINT}/${url}/${id}`, data);
};

export const deleteTask = id => {
	return axiosService.delete(`${API_ENDPOINT}/${url}/${id}`);
};
