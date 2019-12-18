import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import TaskItem from '../TaskItem';
import style from './style';

class TaskList extends Component {
	render() {
		const { classes, tasks, status, onEdit, onDelete } = this.props;

		return (
			<Grid item md={4} xs={12} key={status.value}>
				<Box mt={1} mb={1}>
					<div className={classes.status}>
						<strong>{status.label}</strong>
					</div>
				</Box>
				<div className={classes.wrapperListTask}>
					{tasks.map(task => {
						return (
							<TaskItem
								key={task.id}
								task={task}
								status={status}
								onEdit={() => onEdit(task)}
								onDelete={() => onDelete(task)}
							/>
						);
					})}
				</div>
			</Grid>
		);
	}
}

TaskList.propTypes = {
	classes: PropTypes.object,
	tasks: PropTypes.array,
	status: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default withStyles(style)(TaskList);
