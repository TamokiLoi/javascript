import * as TYPE from '../constants/ActionType';
import * as MESSAGE from '../constants/Message';

var initialState = MESSAGE.MSG_WELLCOME;

const message = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}

export default message;