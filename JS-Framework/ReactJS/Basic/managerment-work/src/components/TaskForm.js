import React, { Component } from 'react';

class TaskForm extends Component {

    constructor(props) {
        super(props);
        this.state = this.setDefaultState();
    }

    componentDidMount() {
        if (this.props.task) {
            this.setState(this.setDefaultState(this.props.task));
        }
    }

    setDefaultState(task = null) {
        return {
            id: task ? task.id : '',
            name: task ? task.name : '',
            status: task ? task.status : false
        }
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
        this.props.onSave(this.state);
    }

    onReset = () => {
        this.setState(this.setDefaultState())
    }

    render() {
        var { id } = this.state;

        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        {id ? 'Update Work' : 'Add Work'}
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
                            <button type="reset" className="btn btn-danger"
                                onClick={this.onReset}>
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

export default TaskForm;
