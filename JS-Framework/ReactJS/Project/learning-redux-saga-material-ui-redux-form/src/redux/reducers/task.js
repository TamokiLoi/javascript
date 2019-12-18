import * as TYPES from '../../common/constants/task';
import * as MESSAGES from '../../common/constants/message';
import { toastError, toastSuccess } from '../../common/helpers/toastHelper';

const initialState = { listTask: [], taskEditing: null };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.API_TASK_FAILED:
			toastError(action.payload.error);
			return { ...state };
		case TYPES.FETCH_TASK:
			return { ...state, listTask: [] };
		case TYPES.FETCH_TASK_SUCCESS:
			return { ...state, listTask: action.payload.data };
		case TYPES.ADD_TASK:
			return { ...state };
		case TYPES.ADD_TASK_SUCCESS:
			toastSuccess(MESSAGES.ADD_TASK_SUCCESSFULLY);
			return { ...state, listTask: [action.payload.data].concat(state.listTask) };
		case TYPES.SET_TASK_EDITING:
			return { ...state, taskEditing: action.payload.task };
		case TYPES.UPDATE_TASK:
			return { ...state };
		case TYPES.UPDATE_TASK_SUCCESS:
			const { listTask } = state;
			const index = listTask.findIndex(item => item.id === action.payload.data.id);
			if (index !== -1) {
				const newList = [
					...listTask.slice(0, index),
					action.payload.data,
					...listTask.slice(index + 1),
				];
				toastSuccess(MESSAGES.UPDATE_TASK_SUCCESSFULLY);
				return { ...state, listTask: newList };
			}
			return { ...state };
		case TYPES.DELETE_TASK:
			return { ...state };
		case TYPES.DELETE_TASK_SUCCESS:
			toastSuccess(MESSAGES.DELETE_TASK_SUCCESSFULLY);
			return {
				...state,
				listTask: state.listTask.filter(item => item.id !== action.payload.id),
			};
		default:
			return state;
	}
};

export default reducer;
