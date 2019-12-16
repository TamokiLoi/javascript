import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { STATUSES } from '../../common/constants';
import TaskForm from '../TaskForm';
import TaskList from '../../components/TaskList';
import * as taskActions from '../../redux/actions/task';
import * as modalActions from '../../redux/actions/modal';
import style from './style';
import SearchBox from '../../components/SearchBox';

class TaskBoard extends Component {
	componentDidMount() {
		const { taskActionCreators } = this.props;
		const { fetchListTask } = taskActionCreators;
		fetchListTask();
	}

	showForm = () => {
		const { modalActionCreators } = this.props;
		const { showModal, changeModalTitle, changeModalContent } = modalActionCreators;
		showModal();
		changeModalTitle('Add New Task');
		changeModalContent(<TaskForm />);
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
					onClick={this.showForm}
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
	}),
	modalActionCreators: PropTypes.shape({
		showModal: PropTypes.func,
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
