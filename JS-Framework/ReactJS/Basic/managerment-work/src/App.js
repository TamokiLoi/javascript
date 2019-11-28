import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Filter from './components/Filter';
import Tasks from './components/Tasks';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tasks: [], // {id: unique, name, status}
            isDisplayForm: false,
            taskEditting: null
        }
    }

    // fucntion run when f5
    componentDidMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            this.setState({ tasks: JSON.parse(localStorage.getItem('tasks')) })
        }
    }

    generateId() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    findIndex = (id) => {
        var { tasks } = this.state;
        var result = -1;
        tasks.forEach((task, index) => {
            if (task.id === id) {
                result = index;
            }
        })
        return result;
    }

    onToggleForm = (display = true, status = null) => {
        if (status) {
            this.setState({
                taskEditting: {
                    id: '',
                    name: '',
                    status: false
                }
            });
        }
        if (this.state.isDisplayForm && this.state.taskEditting.id) {
            this.setState({ isDisplayForm: true });
        } else {
            this.setState({ isDisplayForm: display });
        }
    }

    onCloseForm = () => {
        this.setState({ isDisplayForm: false });
    }

    onSaveLocalStorage(tasks) {
        this.setState({
            tasks: tasks,
            taskEditting: null
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        this.onCloseForm();
    }

    onSave = (task) => {
        var { tasks } = this.state;
        if (task.id) {
            var index = this.findIndex(task.id);
            if (index !== -1) {
                tasks[index] = task;
            }
        } else {
            task.id = this.generateId();
            if (task.name) {
                tasks.push(task);
            }
        }
        this.onSaveLocalStorage(tasks);
    }

    onUpdate = (id, status = null) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            if (status) {
                tasks[index].status = !tasks[index].status;
                this.onSaveLocalStorage(tasks);
            } else {
                this.setState({
                    taskEditting: tasks[index]
                })
                this.onToggleForm();
            }
        }
    }

    onDelete = (id) => {
        var { tasks } = this.state;
        var index = this.findIndex(id);
        if (index !== -1) {
            tasks = tasks.filter(task => task.id !== id);
        }
        this.onSaveLocalStorage(tasks);
    }

    render() {
        var { tasks, isDisplayForm, taskEditting } = this.state;
        var elmTaskForm = isDisplayForm
            ? <TaskForm
                onCloseForm={() => this.onToggleForm(false)}
                onSave={this.onSave}
                task={taskEditting}
            />
            : '';

        return (
            <div className="container">
                <div className="text-center">
                    <h1>Management Work</h1>
                    <hr />
                </div>

                <div className="row">
                    <div className={isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {/* form task */}
                        {elmTaskForm}
                    </div>

                    <div className={isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        {/* show form task */}
                        <button type="button" className="btn btn-primary"
                            onClick={() => this.onToggleForm(!isDisplayForm, 'new')}>
                            <span className="fa fa-plus mr-5"></span>
                            Add Work
                        </button>

                        {/* search-filter */}
                        <div className="row mt-15">
                            {/* search */}
                            <Search />

                            {/* filter */}
                            <Filter />
                        </div>

                        {/* task list */}
                        <div className="row mt-15">
                            <Tasks
                                tasks={tasks}
                                onUpdate={this.onUpdate}
                                onDelete={this.onDelete}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
