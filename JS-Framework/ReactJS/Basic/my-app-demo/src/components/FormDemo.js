import React, { Component } from 'react';

class FormDemo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: 'tamoki',
            password: '123456',
            description: 'asdads',
            sex: 0,
            language: 'vi',
            status: true
        };
    }

    onHandleChange = (event) => {
        var value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value });
    }

    onHandleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    onReset = () => {

    }

    render() {

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    <h3 className="panel-title">Form</h3>
                                </div>
                                <div className="panel-body">
                                    <form onSubmit={this.onHandleSubmit}>

                                        {/* input */}
                                        <div className="form-group">
                                            <label>Username</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.onHandleChange}
                                            />
                                        </div>

                                        {/* password */}
                                        <div className="form-group">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.onHandleChange}
                                            />
                                        </div>

                                        {/* textarea */}
                                        <div className="form-group">
                                            <label>Description</label>
                                            <textarea
                                                cols="10"
                                                rows="3"
                                                className="form-control"
                                                name="description"
                                                value={this.state.description}
                                                onChange={this.onHandleChange}
                                            ></textarea>
                                        </div>

                                        {/* select */}
                                        <div className="form-group">
                                            <label>Sex</label>

                                            <select
                                                className="form-control"
                                                name="sex"
                                                value={this.state.sex}
                                                onChange={this.onHandleChange}
                                            >
                                                <option value={0}>Men</option>
                                                <option value={1}>Women</option>
                                            </select>
                                        </div>

                                        {/* radio */}
                                        <div className="form-group">
                                            <label>Language</label>
                                            <div className="radio mt-0">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="language"
                                                        value="vi"
                                                        checked={this.state.language === 'vi'}
                                                        onChange={this.onHandleChange}
                                                    />
                                                    Vietnamese
                                                </label> <br />
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="language"
                                                        value="en"
                                                        checked={this.state.language === 'en'}
                                                        onChange={this.onHandleChange}
                                                    />
                                                    English
                                                </label>
                                            </div>
                                        </div>

                                        {/* checkbox */}
                                        <div className="form-group">
                                            <label>Check Status</label>
                                            <div className="checkbox mt-0">
                                                <label>
                                                    <input
                                                        type="checkbox"
                                                        name="status"
                                                        value={true}
                                                        checked={this.state.status}
                                                        onChange={this.onHandleChange}
                                                    />
                                                    Status
                                                </label>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                                        <button type="reset" className="btn btn-default" onClick={this.onReset}>Reset</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormDemo;
