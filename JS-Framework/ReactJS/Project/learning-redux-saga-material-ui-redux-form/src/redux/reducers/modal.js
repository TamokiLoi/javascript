import * as TYPES from '../../common/constants/modal';

const initialState = { showModal: false, title: '', component: null };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPES.SHOW_MODAL:
			return { ...state, showModal: true };
		case TYPES.HIDE_MODAL:
			return { ...state, showModal: false, title: '', component: null };
		case TYPES.CHANGE_MODAL_TITLE:
			return { ...state, title: action.payload.title };
		case TYPES.CHANGE_MODAL_CONTENT:
			return { ...state, component: action.payload.component };
		default:
			return state;
	}
};

export default reducer;
