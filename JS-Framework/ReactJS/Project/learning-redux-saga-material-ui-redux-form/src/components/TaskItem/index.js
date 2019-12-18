import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './style';

class TaskItem extends Component {
	render() {
		const { classes, task, status, onEdit, onDelete } = this.props;

		return (
			<Card key={task.id} className={classes.card}>
				<CardContent>
					<Grid container justify="space-between">
						<Grid item md={8}>
							<Typography component="h2" variant="h4" gutterBottom>
								{task.title}
							</Typography>
						</Grid>
						<Grid item md={4} className={classes.textRight}>
							{status.label}
						</Grid>
					</Grid>
					<p>{task.description}</p>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Fab
						color="primary"
						aria-label="edit"
						size="small"
						onClick={() => onEdit(task)}
					>
						<Icon fontSize="small">edit_icon</Icon>
					</Fab>
					<Fab
						color="secondary"
						aria-label="delete"
						size="small"
						onClick={() => onDelete(task)}
					>
						<Icon fontSize="small">delete_forever_icon</Icon>
					</Fab>
				</CardActions>
			</Card>
		);
	}
}

TaskItem.propTypes = {
	classes: PropTypes.object,
	task: PropTypes.object,
	status: PropTypes.object,
	onEdit: PropTypes.func,
	onDelete: PropTypes.func,
};

export default withStyles(style)(TaskItem);
