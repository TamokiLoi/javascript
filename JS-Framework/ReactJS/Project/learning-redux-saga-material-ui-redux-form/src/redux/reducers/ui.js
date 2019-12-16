import * as TYPES from '../../common/constants/ui';

const initialState = { showLoading: false };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.SHOW_LOADING:
			return { ...state, showLoading: true };
		case TYPES.HIDE_LOADING:
			return { ...state, showLoading: false };
		default:
			return state;
	}
};

export default reducer;
