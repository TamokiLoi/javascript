import React, { Component } from 'react';
import { connect } from 'react-redux';

class NoteItem extends Component {

    editNote = () => {
        // send noteItem need edit to Store and show form
        this.props.sendEditData(this.props.note)
        this.props.changeFormStatus()
    }

    deleteNote = () => {
        // send id of noteItem need delete to Store
        this.props.sendDeleteId(this.props.note.id)
        // call show alert
        this.props.alertOn('Delete item ' + this.props.note.title + ' complete!', 'danger')
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="mb-0">
                        <a data-toggle="collapse" data-parent="#noteList" href={"#s" + this.props.index} aria-expanded="true" aria-controls="noteContent1">
                            {this.props.title}
                        </a>
                        <div className="btn-group float-right">
                            <button onClick={() => this.editNote()} className="btn btn-outline-info">Edit</button>
                            <button onClick={() => this.deleteNote()} className="btn btn-outline-danger">Delete</button>
                        </div>
                    </h5>
                </div>
                <div id={"s" + this.props.index} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        changeFormStatus: () => {
            dispatch({ type: 'CHANGE_FORM_STATUS' })
        },
        sendEditData: (editItem) => {
            dispatch({ type: 'GET_EDIT_DATA', editItem })
        },
        sendDeleteId: (deleteId) => {
            dispatch({ type: 'GET_DELETE_ID', deleteId })
        },
        alertOn: (alertContent, alertType) => {
            dispatch({ type: 'ALERT_ON', alertContent, alertType })
        },
        alertOff: () => {
            dispatch({ type: 'ALERT_OFF' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem)