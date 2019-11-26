import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
// import JSX from './components/JSX';
// import PropsDemo from './components/PropsDemo';
// import StateDemo from './components/StateDemo';
import FormDemo from './components/FormDemo';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                {/* <JSX /> */}
                {/* <PropsDemo /> */}
                {/* <StateDemo /> */}
                <FormDemo />
            </div>
        );
    }

}

export default App;
