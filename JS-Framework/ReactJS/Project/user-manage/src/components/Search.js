import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempValue: '',
            userEditReturn: {}
        }
    }

    showButton = () => {
        if (this.props.showFormAdd) {
            return <div className="btn btn-outline-secondary" onClick={() => this.props.changeStateFormAdd()}>Close Form</div>
        } else {
            return <div className="btn btn-outline-info" onClick={() => this.props.changeStateFormAdd()}>Add New User</div>
        }
    }

    isChange = (event) => {
        this.setState({ tempValue: event.target.value });
        // search realtime to app-component and send text-search to app-component
        this.props.sendTextSearch(this.state.tempValue);
    }

    isShowEditForm = () => {
        if (this.props.showFormEdit) {
            return <EditUser
                userEditObject={this.props.userEditObject}
                changeStateFormEdit={() => this.props.changeStateFormEdit()}
                getUserEditInfo={(info) => this.getUserEditInfo(info)}
            />
        }
    }

    // get data user updated from edit-user-component
    getUserEditInfo = (info) => {
        this.setState({ userEditReturn: info });
        this.props.getUserEditInfoToApp(info);
    }

    render() {
        return (
            <div className="col-12">
                <div className="row">
                    {this.isShowEditForm()}
                </div>
                <div className="form-group">
                    <div className="btn-group pr-2">
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" placeholder="input name for search" style={{ width: '700px' }} />
                        {/* send text-search to app-component */}
                        <div className="btn btn-info" onClick={(text) => this.props.sendTextSearch(this.state.tempValue)}>Search Keyword</div>
                    </div>
                    {this.showButton()}
                </div>
                <hr />
            </div>
        );
    }
}

export default Search;