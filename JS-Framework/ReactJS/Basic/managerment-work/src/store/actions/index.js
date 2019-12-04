import * as TYPES from '../constants/ActionTypes';

// task
export const listTask = () => { return { type: TYPES.LIST_TASK } };
export const saveTask = (task) => { return { type: TYPES.SAVE_TASK, task } }
export const updateStatusTask = (id) => { return { type: TYPES.UPDATE_STATUS_TASK, id } }
export const deleteTask = (id) => { return { type: TYPES.DELETE_TASK, id } }
export const taskEditing = (task = {}) => { return { type: TYPES.TASK_EDITING, task } }

// toggle-form
export const toggleForm = () => { return { type: TYPES.TOGGLE_FORM } };
export const openForm = () => { return { type: TYPES.OPEN_FORM } };
export const closeForm = () => { return { type: TYPES.CLOSE_FORM } };

// filter, sort
export const filterTable = (filter) => { return { type: TYPES.FILTER_TABLE, filter } } ;
export const sortTable = (sort) => { return { type: TYPES.SORT_TABLE, sort } } ;