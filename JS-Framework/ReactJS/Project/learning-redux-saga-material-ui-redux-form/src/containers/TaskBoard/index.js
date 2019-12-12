import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { STATUSES } from '../../common/constants';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import style from './style';

const listTask = [
	{
		id: 1,
		title: 'Read book',
		description: 'read material ui book',
		status: 0,
	},
	{
		id: 2,
		title: 'Play game',
		description: 'play game LOL',
		status: 1,
	},
	{
		id: 3,
		title: 'Play with family',
		description: 'play with family in house',
		status: 2,
	},
];

class TaskBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	onToggleForm = (value = false) => {
		this.setState({ open: value });
	};

	renderForm() {
		let xhtml = null;
		const { open } = this.state;
		xhtml = (
			<TaskForm open={open} onCloseForm={() => this.onToggleForm()} />
		);
		return xhtml;
	}

	renderBoard() {
		let xhtml = null;
		xhtml = (
			<Grid container spacing={2}>
				{STATUSES.map(status => {
					return (
						<TaskList
							key={status.value}
							tasks={listTask.filter(
								task => task.status === status.value,
							)}
							status={status}
						/>
					);
				})}
			</Grid>
		);
		return xhtml;
	}

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.taskBoard}>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={() => this.onToggleForm(true)}
				>
					<Icon>add_icon</Icon> Add New Task
				</Button>
				{this.renderBoard()}
				{this.renderForm()}
			</div>
		);
	}
}

TaskBoard.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(style)(TaskBoard);
