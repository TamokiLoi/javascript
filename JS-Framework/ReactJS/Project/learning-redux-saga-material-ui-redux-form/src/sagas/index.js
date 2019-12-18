import { call, fork, put, take, delay, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { getList, addTask, updateTask, deleteTask } from '../apis/task';
import { STATUS_CODE, STATUSES } from '../common/constants/index';
import * as TASK_TYPES from '../common/constants/task';
import {
	fetchListTask,
	fetchListTaskSuccess,
	addTaskSuccess,
	updateTaskSuccess,
	apiTaskFailed,
	deleteTaskSuccess,
} from '../redux/actions/task';
import { hideModal } from '../redux/actions/modal';
import { showLoading, hideLoading } from '../redux/actions/ui';

/**
 * 1: dispactch action fetch task
 * 2: call api and show loading
 * 3: check status code
 * 3.1: success...
 * 3.2: failed...
 * 4: off loading and execute the next job
 */
function* watchFetchListTaskAction() {
	while (true) {
		const action = yield take(TASK_TYPES.FETCH_TASK);
		yield put(showLoading());
		const { params } = action.payload;
		const res = yield call(getList, params);
		const { status, data } = res;
		if (status === STATUS_CODE.SUCCESS) yield put(fetchListTaskSuccess(data));
		else yield put(apiTaskFailed(data));
		yield delay(1000);
		yield put(hideLoading());
	}
}

function* filterTaskSaga({ payload }) {
	yield delay(500);
	const { keyword } = payload;
	yield put(fetchListTask({ q: keyword }));
}

function* addTaskSaga({ payload }) {
	const { title, description } = payload;
	yield put(showLoading());
	const res = yield call(addTask, { title, description, status: STATUSES[0].value });
	const { status, data } = res;
	if (status === STATUS_CODE.CREATED) {
		yield put(addTaskSuccess(data));
		yield put(hideModal());
	} else {
		yield put(apiTaskFailed(data));
	}
	yield delay(500);
	yield put(hideLoading());
}

function* updateTaskSaga({ payload }) {
	const { title, description, status } = payload;
	const taskEditing = yield select(state => state.task.taskEditing);
	yield put(showLoading());
	const res = yield call(updateTask, taskEditing.id, { title, description, status });
	const { status: statusCode, data } = res;
	if (statusCode === STATUS_CODE.SUCCESS) {
		yield put(updateTaskSuccess(data));
		yield put(hideModal());
	} else {
		yield put(apiTaskFailed(data));
	}
	yield delay(500);
	yield put(hideLoading());
}

function* deleteTaskSaga({ payload }) {
	const { id } = yield payload;
	yield put(showLoading());
	const res = yield call(deleteTask, id);
	const { status, data } = res;
	if (status === STATUS_CODE.SUCCESS) {
		yield put(deleteTaskSuccess(id));
		yield put(hideModal());
	} else {
		yield put(apiTaskFailed(data));
	}
	yield delay(500);
	yield put(hideLoading());
}

function* rootSaga() {
	yield fork(watchFetchListTaskAction);
	yield takeLatest(TASK_TYPES.FILTER_TASK, filterTaskSaga);
	yield takeEvery(TASK_TYPES.ADD_TASK, addTaskSaga);
	yield takeLatest(TASK_TYPES.UPDATE_TASK, updateTaskSaga);
	yield takeLatest(TASK_TYPES.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;
