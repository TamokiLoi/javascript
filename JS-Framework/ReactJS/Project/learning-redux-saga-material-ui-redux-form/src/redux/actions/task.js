import * as TYPES from '../../common/constants/task';
import { STATUSES } from '../../common/constants/index';

// call api failed
export const apiTaskFailed = error => ({ type: TYPES.API_TASK_FAILED, payload: { error } });

// load data
export const fetchListTask = (params = {}) => ({ type: TYPES.FETCH_TASK, payload: { params } });
export const fetchListTaskSuccess = data => ({ type: TYPES.FETCH_TASK_SUCCESS, payload: { data } });

// filter & search
export const filterTask = keyword => ({ type: TYPES.FILTER_TASK, payload: { keyword } });

// add task
export const addTask = (title, description) => ({
	type: TYPES.ADD_TASK,
	payload: { title, description },
});
export const addTaskSuccess = data => ({ type: TYPES.ADD_TASK_SUCCESS, payload: { data } });

// set task need edit or delete
export const setTaskEditing = task => ({ type: TYPES.SET_TASK_EDITING, payload: { task } });

// edit task
export const updateTask = (title, description, status = STATUSES[0].value) => ({
	type: TYPES.UPDATE_TASK,
	payload: { title, description, status },
});
export const updateTaskSuccess = data => ({ type: TYPES.UPDATE_TASK_SUCCESS, payload: { data } });

// delete task
export const deleteTask = id => ({ type: TYPES.DELETE_TASK, payload: { id } });
export const deleteTaskSuccess = id => ({ type: TYPES.DELETE_TASK_SUCCESS, payload: { id } });
