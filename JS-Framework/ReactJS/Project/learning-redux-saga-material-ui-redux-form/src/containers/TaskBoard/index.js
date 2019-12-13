import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATUSES } from '../../common/constants';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import * as taskActions from '../../redux/actions/task';
import style from './style';

class TaskBoard extends Component {
	constructor(props) {
		super(props);
		this.state = { open: false };
	}

	componentDidMount() {
		const { taskActionCreators } = this.props;
		const { fetchListTaskRequest } = taskActionCreators;
		fetchListTaskRequest();
	}

	onToggleForm = (value = false) => {
		this.setState({ open: value });
	};

	renderForm() {
		let xhtml = null;
		const { open } = this.state;
		xhtml = <TaskForm open={open} onCloseForm={() => this.onToggleForm()} />;
		return xhtml;
	}

	renderBoard() {
		const { listTask } = this.props;
		let xhtml = null;
		xhtml = (
			<Grid container spacing={2}>
				{STATUSES.map(status => {
					return (
						<TaskList
							key={status.value}
							tasks={listTask.filter(item => item.status === status.value)}
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
	taskActionCreators: PropTypes.shape({
		fetchListTaskRequest: PropTypes.func,
	}),
	listTask: PropTypes.array,
};

const mapStateToProps = state => {
	return {
		listTask: state.task.listTask,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		taskActionCreators: bindActionCreators(taskActions, dispatch),
	};
};

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
