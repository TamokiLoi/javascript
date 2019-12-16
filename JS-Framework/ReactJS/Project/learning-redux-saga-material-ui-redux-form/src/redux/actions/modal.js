import * as TYPES from '../../common/constants/modal';

export const showModal = () => ({ type: TYPES.SHOW_MODAL });
export const hideModal = () => ({ type: TYPES.HIDE_MODAL });
export const changeModalTitle = title => ({ type: TYPES.CHANGE_MODAL_TITLE, payload: { title } });
export const changeModalContent = component => ({
	type: TYPES.CHANGE_MODAL_CONTENT,
	payload: { component },
});
