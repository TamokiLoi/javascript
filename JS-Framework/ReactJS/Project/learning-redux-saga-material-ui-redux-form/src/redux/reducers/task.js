import * as taskTypes from '../../common/constants/task';
import { toastError } from '../../common/helpers/toastHelper';

const initialState = {
	listTask: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case taskTypes.FETCH_TASK:
			return {
				...state,
				listTask: [],
			};
		case taskTypes.FETCH_TASK_SUCCESS:
			return {
				...state,
				listTask: action.payload.data,
			};
		case taskTypes.FETCH_TASK_FAILED:
			toastError(action.payload.error);
			return state;
		default:
			return state;
	}
};

export default reducer;
