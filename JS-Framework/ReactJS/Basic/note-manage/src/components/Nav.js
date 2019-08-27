import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {

    handleAdd = (event) => {
        event.preventDefault();
        // access to store to show form-add
        this.props.changeFormStatus();
        // change title form
        this.props.changeTitleFormStatus();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark mb-4" style={{ backgroundColor: 'black' }}>
                <a className="navbar-brand" href="/">React</a>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/" onClick={(event) => this.handleAdd(event)}>Add Note</a>
                        </li>
                    </ul>
                </div>
            </nav>
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
            dispatch({type: 'CHANGE_FORM_STATUS'})
        },
        changeTitleFormStatus: () => {
            dispatch({type: 'CHANGE_TITLE_FORM_STATUS'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);