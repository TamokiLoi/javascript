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
            isDisplayForm: false
        }
    }

    // fucntion run when f5
    componentDidMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            this.setState({ tasks: JSON.parse(localStorage.getItem('tasks')) })
        }
    }

    onGenerateData = () => {
        var tasks = [
            {
                id: this.generateId(),
                name: 'ABC',
                status: true
            },
            {
                id: this.generateId(),
                name: 'DCE',
                status: false
            },
            {
                id: this.generateId(),
                name: 'FHG',
                status: true
            },
        ];
        this.setState({ tasks: tasks });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    generateId() {
        return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
            this.s4() + '-' + this.s4() + this.s4() + this.s4();
    }

    s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }

    onToggleForm = () => {
        this.setState({isDisplayForm: !this.state.isDisplayForm})
    }

    render() {
        var { tasks, isDisplayForm } = this.state;
        var elmTaskForm = isDisplayForm ? <TaskForm onCloseForm={this.onToggleForm}/> : '';

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
                            onClick={this.onToggleForm}>
                            <span className="fa fa-plus mr-5"></span>
                            Add Work
                        </button>

                        <button type="button" className="btn btn-danger ml-5"
                            onClick={this.onGenerateData}>
                            Generate Data
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
                            <Tasks tasks={tasks} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
