import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class TaskItem extends Component {

    onUpdateTask = () => {
        this.props.onTaskEditing(this.props.task);
        this.props.onOpenForm();
    }

    onDeleteTask = (id) => {
        this.props.onDeleteTask(id);
        this.props.onCloseForm();
    }

    render() {
        var { task, index } = this.props;

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? 'label label-success' : 'label label-danger'}
                        onClick={() => this.props.onUpdateStatusTask(task.id)}>
                        {task.status === true ? 'Active' : 'InActive'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"
                        onClick={this.onUpdateTask}>
                        <span className="fa fa-pencil mr-5"></span>Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={() => this.onDeleteTask(task.id)}>
                        <span className="fa fa-trash mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onOpenForm: () => { dispatch(actions.openForm()); },
        onCloseForm: () => { dispatch(actions.closeForm()); },
        onUpdateStatusTask: (id) => { dispatch(actions.updateStatusTask(id)); },
        onTaskEditing: (task) => { dispatch(actions.taskEditing(task)); },
        onDeleteTask: (id) => { dispatch(actions.deleteTask(id)); }
    }
}

export default connect(null, mapDispatchToProps)(TaskItem);
