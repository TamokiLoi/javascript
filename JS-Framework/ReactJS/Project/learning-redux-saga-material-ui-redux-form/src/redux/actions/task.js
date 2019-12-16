import * as TYPES from '../../common/constants/task';

// load data
export const fetchListTask = () => ({ type: TYPES.FETCH_TASK });
export const fetchListTaskSuccess = data => ({ type: TYPES.FETCH_TASK_SUCCESS, payload: { data } });
export const fetchListTaskFailed = error => ({ type: TYPES.FETCH_TASK_FAILED, payload: { error } });

// filter & search
export const filterTask = keyword => ({ type: TYPES.FILTER_TASK, payload: { keyword } });
export const filterTaskSuccess = data => ({ type: TYPES.FILTER_TASK_SUCCESS, payload: { data } });

// add task
export const addTask = (title, description) => ({
	type: TYPES.ADD_TASK,
	payload: { title, description },
});
export const addTaskSuccess = data => ({ type: TYPES.ADD_TASK_SUCCESS, payload: { data } });
export const addTaskFailed = error => ({ type: TYPES.ADD_TASK_FAILED, payload: { error } });
