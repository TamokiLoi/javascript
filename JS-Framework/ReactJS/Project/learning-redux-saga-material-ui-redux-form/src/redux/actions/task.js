// import * as taskApis from '../../apis/task';
import * as taskTypes from '../../common/constants/task';

export const fetchListTask = () => {
	return { type: taskTypes.FETCH_TASK };
};

export const fetchListTaskSuccess = data => {
	return { type: taskTypes.FETCH_TASK_SUCCESS, payload: { data } };
};

export const fetchListTaskFailed = error => {
	return { type: taskTypes.FETCH_TASK_FAILED, payload: { error } };
};

// export const fetchListTaskRequest = () => {
// 	return dispatch => {
// 		dispatch(fetchListTask());
// 		taskApis
// 			.getList()
// 			.then(res => {
// 				dispatch(fetchListTaskSuccess(res.data));
// 			})
// 			.catch(err => {
// 				dispatch(fetchListTaskFailed(err));
// 			});
// 	};
// };
