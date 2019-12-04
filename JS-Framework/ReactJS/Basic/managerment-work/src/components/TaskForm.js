import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.setDefaultState();
    }

    componentDidMount() {
        if (this.props.taskEditing && this.props.taskEditing.id !== null) {
            this.onSetState(this.props.taskEditing);
        } else {
            this.onClear();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.taskEditing) {
            this.onSetState(nextProps.taskEditing);
        } else {
            this.onClear();
        }
    }

    onSetState = (task = {}) => {
        this.setState(this.setDefaultState(task));
    }

    setDefaultState = (task = {}) => {
        return {
            id: task.id ? task.id : '',
            name: task.name ? task.name : '',
            status: task.status ? task.status : false
        };
    }

    onChange = (event) => {
        var value = event.target.value;
        if (event.target.name === 'status') {
            value = event.target.value === 'true' ? true : false;
        }
        this.setState({ [event.target.name]: value })
    }

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSaveTask(this.state);
        this.props.onCloseForm();
        this.onClear();
    }

    onClear = () => { this.onSetState(this.props.taskEditing); }

    render() {
        if (!this.props.isDisplayForm) return '';

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {this.props.taskEditing.id ? 'Update Work' : 'Add Work'}
                        <span className="fa fa-times-circle text-right"
                            onClick={this.props.onCloseForm}></span>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="form-group">
                            <label>Status</label>
                            <select
                                className="form-control"
                                name="status"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={false}>InActive</option>
                                <option value={true}>Active</option>
                            </select>
                        </div>

                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>
                                Save
                            </button>&nbsp;
                            <button type="button" className="btn btn-danger"
                                onClick={this.onClear}>
                                <span className="fa fa-close mr-5"></span>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSaveTask: (task) => { dispatch(actions.saveTask(task)); },
        onCloseForm: () => { dispatch(actions.closeForm()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
