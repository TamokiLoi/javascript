import React, { Component } from 'react';
import Message from '../components/Message';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class MessageContainer extends Component {

    render() {
        return (
            <Message message={this.props.message} />
        );
    }

}

MessageContainer.propTypes = { message: PropTypes.string.isRequired };

const mapStateToProps = (state, ownProps) => {
    return {
        message: state.message
    }
}

export default connect(mapStateToProps, null)(MessageContainer);
