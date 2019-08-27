import React, { Component } from 'react';
const uuidv1 = require('uuid/v1');
class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            phone: '',
            permission: '',
        }
    }

    checkState = () => {
        if (this.props.showFormAdd) {
            return (
                <div className="col">
                    <form method="post">
                        <div className="card border-primary mb-3 mt-2">
                            <div className="card-header">Form Add New User</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" placeholder="input username" />
                                </div>
                                <div className="form-group">
                                    <input onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" placeholder="input phone" />
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => this.isChange(event)} name="permission" className="custom-select" required>
                                        <option value>Select Role Default</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                    <div className="invalid-feedback">Example invalid custom select feedback</div>
                                </div>
                                <div className="form-group">
                                    <input type="reset" onClick={() => this.sendNewUser()} className="btn btn-block btn-primary" value="Add News" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    // send new-user-data to app-component
    sendNewUser = () => {
        var item = {};
        item.id = uuidv1();
        item.name = this.state.name;
        item.phone = this.state.phone;
        item.permission = this.state.permission;
        this.props.sendNewUserData(item);
    }

    render() {
        return (
            <div>
                {this.checkState()}
            </div>
        );
    }
}

export default AddUser;