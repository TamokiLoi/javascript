import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            id: ''
        }
    }

    componentWillMount = () => {
        // check for case edit-item
        if (this.props.editItem) {
            this.setState({
                id: this.props.editItem.id,
                noteTitle: this.props.editItem.title,
                noteContent: this.props.editItem.content
            })
        }
    }

    // check change data by input
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    // get new-data from form and send to store
    submitForm = (title, content) => {
        if (this.state.id) {
            // case edit-item
            var editItem = {};
            editItem.id = this.state.id;
            editItem.title = this.state.noteTitle;
            editItem.content = this.state.noteContent;
            // send noteItem edited to Store
            this.props.editDataStore(editItem);
            // call show alert
            this.props.alertOn('Update item complete!', 'success')

        } else {
            // case add-item
            var addItem = {};
            addItem.title = title;
            addItem.content = content;
            // send new noteItem to Store
            this.props.addDataStore(addItem);
            // call show alert
            this.props.alertOn('Add new item complete!', 'success')
        }
        // close form
        this.props.changeFormStatus();
    }

    // check status form add or edit
    chaneTitleForm = () => {
        if (this.props.isTitleForm) {
            return <h4>Form Add New Note</h4>
        } else {
            return <h4>Form Edit Note</h4>
        }
    }

    render() {
        return (
            <div className="col-4">
                {this.chaneTitleForm()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Node Title</label>
                        <input defaultValue={this.props.editItem.title} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="helpIdNoteTitle" />
                        <small id="helpIdNoteTitle" className="form-text text-muted">Enter the title here</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Note Content</label>
                        <textarea defaultValue={this.props.editItem.content} onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="helpIdNoteContent" />
                        <small id="helpIdNoteContent" className="form-text text-muted">Enter the content here</small>
                    </div>
                    <button onClick={() => this.submitForm(this.state.noteTitle, this.state.noteContent)} type="reset" className="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        )
    }
}

// this.props.editItem
const mapStateToProps = (state, ownProps) => {
    return {
        editItem: state.editItem,
        isTitleForm: state.isTitleForm
    }
}

// this.props.addDataStore
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({ type: 'SEND_ADD_DATA', getItem })
        },
        editDataStore: (getItem) => {
            dispatch({ type: 'SEND_EDIT_DATA', getItem })
        },
        changeFormStatus: () => {
            dispatch({ type: 'CHANGE_FORM_STATUS' })
        },
        alertOn: (alertContent, alertType) => {
            dispatch({ type: 'ALERT_ON', alertContent, alertType })
        },
        alertOff: () => {
            dispatch({ type: 'ALERT_OFF' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
