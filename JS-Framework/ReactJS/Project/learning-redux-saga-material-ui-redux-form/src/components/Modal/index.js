import { Icon, Modal } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import style from './style';
import * as modalActions from '../../redux/actions/modal';

class CommonModal extends Component {
	render() {
		const { classes, open, title, component, modalActionCreators } = this.props;
		const { hideModal } = modalActionCreators;
		return (
			<Modal open={open} onClose={hideModal}>
				<div className={classes.modal}>
					<div className={classes.header}>
						<span className={classes.title}>{title}</span>
						<Icon className={classes.icon} onClick={hideModal}>
							clear_icon
						</Icon>
					</div>
					<div className={classes.content}>{component}</div>
				</div>
			</Modal>
		);
	}
}

CommonModal.propTypes = {
	classes: PropTypes.object,
	open: PropTypes.bool,
	title: PropTypes.string,
	component: PropTypes.object,
	modalActionCreators: PropTypes.shape({ hideModal: PropTypes.func }),
};

const mapStateToProps = state => ({
	open: state.modal.showModal,
	title: state.modal.title,
	component: state.modal.component,
});

const mapDispatchToProps = dispatch => ({
	modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(style), withConnect)(CommonModal);
