import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskSearch from './components/TaskSearch';
import TaskSort from './components/TaskSort';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './store/actions/index';

class App extends Component {

    onShowFormAdd = () => {
        var { taskEditing } = this.props;
        (taskEditing && taskEditing.id) ? this.props.onOpenForm() : this.props.onToggleForm();
        this.props.onTaskDefault();
    }

    render() {
        var { isDisplayForm } = this.props;

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Management Work</h1>
                    <hr />
                </div>

                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {/* form task */}
                        <TaskForm />
                    </div>

                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        {/* show form task */}
                        <button type="button" className="btn btn-primary"
                            onClick={this.onShowFormAdd}>
                            <span className="fa fa-plus mr-5"></span>
                            Add Work
                        </button>

                        {/* search-filter */}
                        <div className="row mt-15">
                            {/* search */}
                            <TaskSearch />

                            {/* sort */}
                            <TaskSort />
                        </div>

                        {/* task list */}
                        <div className="row mt-15">
                            <TaskList />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isDisplayForm: state.isDisplayForm,
        taskEditing: state.taskEditing
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggleForm: () => { dispatch(actions.toggleForm()); },
        onOpenForm: () => { dispatch(actions.openForm()); },
        onTaskDefault: () => { dispatch(actions.taskEditing()); },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
