import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { connect } from 'react-redux';
import AlertInfo from './components/AlertInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  showFormEdit = () => {
    if (this.props.isForm) {
      return <NoteForm />
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <AlertInfo />
        <div className="container">
          <div className="row">
            <NoteList />
            {this.showFormEdit()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isForm: state.isForm
  }
}

export default connect(mapStateToProps)(App);
