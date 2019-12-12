import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import style from './style';

class TaskForm extends Component {
	render() {
		const { open, classes, onCloseForm } = this.props;

		return (
			<Dialog open={open} onClose={onCloseForm} aria-labelledby="form-dialog-title">
				<DialogTitle id="form-dialog-title">Add New Task</DialogTitle>
				<DialogContent>
					<TextField
						id="standard-name"
						label="Name"
						className={classes.textField}
						margin="normal"
					/>

					<TextField
						id="standard-multiline-flexible"
						label="Multiline"
						className={classes.textField}
						multiline
						rowsMax="4"
						margin="normal"
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={onCloseForm} color="primary">
						Cancel
					</Button>
					<Button onClick={onCloseForm} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

TaskForm.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(style)(TaskForm);
