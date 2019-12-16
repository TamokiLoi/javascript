import * as TYPES from '../../common/constants/task';
import { toastError } from '../../common/helpers/toastHelper';

const initialState = { listTask: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.FETCH_TASK:
			return { ...state, listTask: [] };
		case TYPES.FETCH_TASK_SUCCESS:
			return { ...state, listTask: action.payload.data };
		case TYPES.FETCH_TASK_FAILED:
			toastError(action.payload.error);
			return { ...state, listTask: [] };
		case TYPES.FILTER_TASK_SUCCESS:
			return { ...state, listTask: action.payload.data };
		case TYPES.ADD_TASK:
			return { ...state };
		case TYPES.ADD_TASK_SUCCESS:
			return { ...state, listTask: [action.payload.data].concat(state.listTask) };
		case TYPES.ADD_TASK_FAILED:
			toastError(action.payload.error);
			return { ...state };
		default:
			return state;
	}
};

export default reducer;
