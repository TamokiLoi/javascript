import { noteData } from './../firebase/firebaseConnect.js';

var redux = require('redux');
const noteInitialState = {
    isForm: false,
    isTitleForm: false,
    editItem: {},
    alertShow: false,
    alertContent: '',
    alertType: ''

}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "SEND_ADD_DATA":
            // add addNewItem to firebase
            noteData.push(action.getItem)
            return state
        case "CHANGE_FORM_STATUS":
            return { ...state, isForm: !state.isForm }
        case "CHANGE_TITLE_FORM_STATUS":
            return { ...state, isTitleForm: !state.isTitleForm }
        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editItem }
        case "SEND_EDIT_DATA":
            // update noteItem to firebase
            noteData.child(action.getItem.id).update({
                title: action.getItem.title,
                content: action.getItem.content
            })
            return { ...state, editItem: {} }
        case "GET_DELETE_ID":
            // send id of noteItem need delete to firebase
            noteData.child(action.deleteId).remove();
            return state
        case "ALERT_ON":
            return { ...state, alertShow: true, alertContent: action.alertContent, alertType: action.alertType }
        case "ALERT_OFF":
            return { ...state, alertShow: false}
        default:
            return state
    }
}
var store = redux.createStore(allReducer);
store.subscribe(function () {
    // console.log(store.getState());
})
export default store;