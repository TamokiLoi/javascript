import { Box, Button, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { Field, reduxForm } from 'redux-form';
import renderTextField from '../../components/FormHelper/TextField';
import * as modalActions from '../../redux/actions/modal';
import * as taskActions from '../../redux/actions/task';
import style from './style';
import validate from './validate';

class TaskForm extends Component {
	handleSubmitForm = data => {
		const { taskActionCreators } = this.props;
		const { addTask } = taskActionCreators;
		const { title, description } = data;
		addTask(title, description);
	};

	render() {
		const { classes, handleSubmit, invalid, submitting, modalActionCreators } = this.props;
		const { hideModal } = modalActionCreators;

		return (
			<form onSubmit={handleSubmit(this.handleSubmitForm)}>
				<Grid container>
					<Grid item md={12}>
						<Field
							id="title"
							label="Title"
							className={classes.textField}
							margin="normal"
							name="title"
							component={renderTextField}
						/>
					</Grid>
					<Grid item md={12}>
						<Field
							id="description"
							label="Description"
							className={classes.textField}
							multiline
							rowsMax="4"
							margin="normal"
							name="description"
							component={renderTextField}
						/>
					</Grid>
					<Grid item md={12}>
						<Box display="flex" flexDirection="row-reverse" mt={2}>
							<Box>
								<Button
									variant="contained"
									color="primary"
									type="submit"
									disabled={invalid || submitting}
								>
									Save
								</Button>
							</Box>
							<Box mr={1}>
								<Button variant="contained" onClick={hideModal}>
									Cancel
								</Button>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</form>
		);
	}
}

TaskForm.propTypes = {
	classes: PropTypes.object,
	handleSubmit: PropTypes.func,
	invalid: PropTypes.bool,
	submitting: PropTypes.bool,
	modalActionCreators: PropTypes.shape({ hideModal: PropTypes.func }),
	taskActionCreators: PropTypes.shape({ addTask: PropTypes.func }),
};

const mapDispatchToProps = dispatch => ({
	modalActionCreators: bindActionCreators(modalActions, dispatch),
	taskActionCreators: bindActionCreators(taskActions, dispatch),
});

const withConnect = connect(null, mapDispatchToProps);

const FORM_NAME = 'TASK_MANAGEMENT';
const withReduxForm = reduxForm({ form: FORM_NAME, validate });

export default compose(withStyles(style), withConnect, withReduxForm)(TaskForm);
