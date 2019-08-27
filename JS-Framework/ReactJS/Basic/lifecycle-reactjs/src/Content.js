import React, { Component } from 'react';

class Content extends Component {

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps content is run ' + nextProps.name);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate content is run');
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate content is run');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate content is run');
    }

    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
            </div>
        );
    }
}

export default Content;