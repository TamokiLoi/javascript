import axiosService from '../common/services/axiosService';
import { API_ENDPOINT } from '../common/constants/index';

const url = 'task';

export const getList = () => {
	return axiosService.get(`${API_ENDPOINT}/${url}`);
};

export const addTask = data => {
	return axiosService.post(`${API_ENDPOINT}/${url}`, data);
};
