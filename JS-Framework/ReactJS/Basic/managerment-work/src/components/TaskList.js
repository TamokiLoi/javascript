import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1
        }
    }

    onChange = (event) => {
        this.props.onFilter({
            name: event.target.name === 'filterName' ? event.target.value : this.state.filterName,
            status: event.target.name === 'filterStatus' ? event.target.value : this.state.filterStatus
        })
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        var { filterName, filterStatus } = this.state;
        var { tasks, filter, sort } = this.props;

        // filter & search
        if (filter) {
            if (filter.name) {
                tasks = tasks.filter((task) => {
                    return task.name.toLowerCase().indexOf(filter.name) !== -1;
                })
            }
            tasks = tasks.filter((task) => {
                if (filter.status === -1) return task;
                else return task.status === (filter.status === 1 ? true : false);
            });
        }

        // sort
        if (sort && sort.by === 'name') {
            tasks.sort((a, b) => {
                if (a.name > b.name) return sort.value;
                else if (a.name < b.name) return -sort.value;
                else return 0;
            });
        } else {
            tasks.sort((a, b) => {
                if (a.status > b.status) return -sort.value;
                else if (a.status < b.status) return sort.value;
                else return 0;
            });
        }

        var elmTasks = tasks.map((task, index) => {
            return <TaskItem
                key={task.id}
                index={index}
                task={task}
            />
        });

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
                                <input
                                    type="text"
                                    className="form-control"
                                    name="filterName"
                                    value={filterName}
                                    onChange={this.onChange}
                                />
                            </td>
                            <td>
                                <select className="form-control"
                                    name="filterStatus"
                                    value={filterStatus}
                                    onChange={this.onChange}
                                >
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

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks,
        filter: state.filter,
        sort: state.sort,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onFilter: (filter) => { dispatch(actions.filterTable(filter)); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
