import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            phone: this.props.userEditObject.phone,
            permission: this.props.userEditObject.permission
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({ [name]: value });
    }

    editComplete = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.phone = this.state.phone;
        info.permission = this.state.permission;
        // pass data updated to search-component
        this.props.getUserEditInfo(info);
        // close form-edit
        this.props.changeStateFormEdit();
    }

    render() {
        return (
            <div className="col-12">
                <form method="post">
                    <div className="card text-white bg-secondary mb-3 mt-2">
                        <div className="card-header text-center">Form Edit User</div>
                        <div className="card-body text-primary">
                            <div className="form-group">
                                <input defaultValue={this.props.userEditObject.name} onChange={(event) => this.isChange(event)} name="name" type="text" className="form-control" placeholder="input username" />
                            </div>
                            <div className="form-group">
                                <input defaultValue={this.props.userEditObject.phone} onChange={(event) => this.isChange(event)} name="phone" type="text" className="form-control" placeholder="input phone" />
                            </div>
                            <div className="form-group">
                                <select defaultValue={this.props.userEditObject.permission} onChange={(event) => this.isChange(event)} name="permission" className="custom-select" required>
                                    <option value>Select Role Default</option>
                                    <option value="1">Admin</option>
                                    <option value="2">Moderator</option>
                                    <option value="3">Normal</option>
                                </select>
                                <div className="invalid-feedback">Example invalid custom select feedback</div>
                            </div>
                            <div className="form-group">
                                <input type="reset" onClick={() => this.editComplete()} className="btn btn-block btn-primary" value="Update" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default EditUser;