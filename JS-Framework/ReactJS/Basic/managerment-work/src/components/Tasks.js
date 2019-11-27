import React, { Component } from 'react';
import TaskItem from './TaskItem';

class Tasks extends Component {

    render() {
        var { tasks } = this.props;
        var elmTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
                onUpdate={this.props.onUpdate}
                onDelete={this.props.onDelete}
            />
        })

        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input type="text" className="form-control" />
                            </td>
                            <td>
                                <select className="form-control">
                                    <option value="-1">All</option>
                                    <option value="0">InActive</option>
                                    <option value="1">Active</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        {elmTasks}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Tasks;
