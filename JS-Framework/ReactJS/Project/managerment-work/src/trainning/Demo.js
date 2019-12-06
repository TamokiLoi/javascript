import { createStore } from 'redux';
import mainReducer from './reducers/index';
import { status, sort } from './actions/index';

const store = createStore(mainReducer);

console.log('Default: ', store.getState());

// action toggle status
store.dispatch(status());
console.log('TOGGLE_STATUS: ', store.getState());

// action sort by name: Z-A
store.dispatch(sort({
    by: 'status',
    value: -1
}));
console.log('SORT: ', store.getState());


