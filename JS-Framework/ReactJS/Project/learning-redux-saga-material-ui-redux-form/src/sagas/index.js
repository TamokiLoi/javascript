import { call, fork, put, take } from 'redux-saga/effects';
import { getList } from '../apis/task';
import { STATUS_CODE } from '../common/constants/index';
import * as taskTypes from '../common/constants/task';
import { fetchListTaskFailed, fetchListTaskSuccess } from '../redux/actions/task';

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
		yield take(taskTypes.FETCH_TASK);
		const res = yield call(getList);
		const { status, data } = res;
		if (status === STATUS_CODE.SUCCESS) yield put(fetchListTaskSuccess(data));
		else yield put(fetchListTaskFailed(data));
	}
}

function* watchCreateTaskAction() {
	yield true;
	console.log('watchCreateTaskAction');
}

function* rootSaga() {
	yield fork(watchFetchListTaskAction);
	yield fork(watchCreateTaskAction);
}

export default rootSaga;
