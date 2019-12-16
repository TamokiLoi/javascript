import { call, fork, put, take, delay, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { getList, addTask } from '../apis/task';
import { STATUS_CODE, STATUSES } from '../common/constants/index';
import * as TASK_TYPES from '../common/constants/task';
import {
	fetchListTaskFailed,
	fetchListTaskSuccess,
	filterTaskSuccess,
	addTaskSuccess,
	addTaskFailed,
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
		yield take(TASK_TYPES.FETCH_TASK);
		yield put(showLoading());
		const res = yield call(getList);
		const { status, data } = res;
		if (status === STATUS_CODE.SUCCESS) yield put(fetchListTaskSuccess(data));
		else yield put(fetchListTaskFailed(data));
		yield delay(1000);
		yield put(hideLoading());
	}
}

function* filterTaskSaga({ payload }) {
	yield delay(500);
	const { keyword } = payload;
	const list = yield select(state => state.task.listTask);
	const filteredTask = list.filter(task =>
		task.title
			.trim()
			.toLowerCase()
			.includes(keyword.trim().toLowerCase()),
	);
	yield put(filterTaskSuccess(filteredTask));
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
		yield put(addTaskFailed(data));
	}
	yield delay(500);
	yield put(hideLoading());
}

function* rootSaga() {
	yield fork(watchFetchListTaskAction);
	yield takeLatest(TASK_TYPES.FILTER_TASK, filterTaskSaga);
	yield takeEvery(TASK_TYPES.ADD_TASK, addTaskSaga);
}

export default rootSaga;
