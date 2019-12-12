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
		const { classes, task, status } = this.props;

		return (
			<Card key={task.id} className={classes.card}>
				<CardContent>
					<Grid container justify="space-between">
						<Grid item md={8}>
							<Typography component="h2">{task.title}</Typography>
						</Grid>
						<Grid item md={4}>
							{status.label}
						</Grid>
					</Grid>
					<p>{task.description}</p>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Fab color="primary" aria-label="edit" size="small">
						<Icon fontSize="small">edit_icon</Icon>
					</Fab>
					<Fab color="secondary" aria-label="delete" size="small">
						<Icon fontSize="small">delete_forever_icon</Icon>
					</Fab>
				</CardActions>
			</Card>
		);
	}
}

TaskItem.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(style)(TaskItem);
