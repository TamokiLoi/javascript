import React, { Component } from 'react';

class TaskItem extends Component {

    render() {
        var { task, index } = this.props;

        return (
            <tr>
                <td className="text-center">{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span className={task.status === true ? 'label label-danger' : 'label label-success'}
                        onClick={() => this.props.onUpdate(task.id, 'status')}
                    >
                        {task.status === true ? 'Active' : 'InActive'}
                    </span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning"
                        onClick={() => this.props.onUpdate(task.id)}>
                        <span className="fa fa-pencil mr-5"></span>Edit
                    </button>
                    &nbsp;
                    <button type="button" className="btn btn-danger"
                        onClick={() => this.props.onDelete(task.id)}>
                        <span className="fa fa-trash mr-5"></span>Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
