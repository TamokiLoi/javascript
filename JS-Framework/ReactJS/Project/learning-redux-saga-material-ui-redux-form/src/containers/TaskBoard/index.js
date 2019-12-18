import { Box, Button, Grid, Icon } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATUSES } from '../../common/constants';
import SearchBox from '../../components/SearchBox';
import TaskList from '../../components/TaskList';
import * as modalActions from '../../redux/actions/modal';
import * as taskActions from '../../redux/actions/task';
import TaskForm from '../TaskForm';
import style from './style';

class TaskBoard extends Component {
	componentDidMount() {
		const { taskActionCreators } = this.props;
		const { fetchListTask } = taskActionCreators;
		fetchListTask();
	}

	handleShowForm = (task = null, type = false) => {
		const { modalActionCreators, taskActionCreators, classes } = this.props;
		const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
		const { setTaskEditing } = taskActionCreators;
		const { hideModal } = modalActionCreators;
		showModal();
		setTaskEditing(task);
		let title = 'Add New Task';
		switch (type) {
			case true:
				title = 'Delete Task';
				changeModalTitle(title);
				changeModalContent(
					<div className={classes.modalDelete}>
						<div className={classes.modalConfirmText}>
							Are you sure you want to delete item
							<span className={classes.modalConfirmTextBold}> {task.title}</span>?
						</div>
						<Box display="flex" flexDirection="row-reverse" mt={2}>
							<Box ml={1}>
								<Button variant="contained" onClick={hideModal}>
									No
								</Button>
							</Box>
							<Box>
								<Button
									variant="contained"
									color="primary"
									onClick={() => this.handleDeleteTask(task.id)}
								>
									Yes
								</Button>
							</Box>
						</Box>
					</div>,
				);
				break;
			case false:
				if (task) title = 'Edit Task';
				changeModalTitle(title);
				changeModalContent(<TaskForm />);
				break;
			default:
				break;
		}
	};

	renderSearchBox = () => {
		let xhtml = null;
		xhtml = <SearchBox handleFilter={this.handleFilter} />;
		return xhtml;
	};

	handleFilter = event => {
		const { taskActionCreators } = this.props;
		const { filterTask } = taskActionCreators;
		filterTask(event.target.value);
	};

	handleEditTask = task => {
		this.handleShowForm(task);
	};

	showModalDeleteTask = task => {
		this.handleShowForm(task, true);
	};

	handleDeleteTask = id => {
		const { taskActionCreators } = this.props;
		const { deleteTask } = taskActionCreators;
		deleteTask(id);
	};

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
							onEdit={this.handleEditTask}
							onDelete={this.showModalDeleteTask}
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
					onClick={() => this.handleShowForm()}
				>
					<Icon>add_icon</Icon> Add New Task
				</Button>
				{this.renderSearchBox()}
				{this.renderBoard()}
			</div>
		);
	}
}

TaskBoard.propTypes = {
	classes: PropTypes.object,
	taskActionCreators: PropTypes.shape({
		fetchListTask: PropTypes.func,
		filterTask: PropTypes.func,
		setTaskEditing: PropTypes.func,
		deleteTask: PropTypes.func,
	}),
	modalActionCreators: PropTypes.shape({
		showModal: PropTypes.func,
		hideModal: PropTypes.func,
		changeModalTitle: PropTypes.func,
		changeModalContent: PropTypes.func,
	}),
	listTask: PropTypes.array,
};

const mapStateToProps = state => ({ listTask: state.task.listTask });

const mapDispatchToProps = dispatch => ({
	taskActionCreators: bindActionCreators(taskActions, dispatch),
	modalActionCreators: bindActionCreators(modalActions, dispatch),
});

export default withStyles(style)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
