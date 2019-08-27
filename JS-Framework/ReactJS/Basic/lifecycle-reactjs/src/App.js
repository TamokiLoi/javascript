import React, { Component } from 'react';
import './App.css';
import Content from './Content';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOne: "init state one",
      stateTwo: "init state two"
    }
  }

  componentWillMount() {
    console.log('componentWillMount is run')
  }

  componentDidMount() {
    console.log('componentDidMount is run');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps is run');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate is run');
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate is run');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate is run');
  }

  updateState = () => {
    this.setState({
      stateOne: 'update state one',
      stateTwo: 'update state two'
    });
  }

  render() {
    console.log('Render is run');
    console.log(this.state.stateOne);
    return (
      <div className="App">
        <Content name={this.state.stateTwo}/>
        <button onClick={() => this.updateState()}>Update State</button>
      </div>
    );
  }
}

export default App;
