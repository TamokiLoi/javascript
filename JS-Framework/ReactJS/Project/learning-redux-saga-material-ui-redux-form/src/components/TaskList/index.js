import React, { Component } from 'react';
import style from './style';
import { withStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import TaskItem from '../TaskItem';

class TaskList extends Component {
    render() {
        const { classes, tasks, status } = this.props;

        return (
            <Grid item md={4} xs={12} key={status.value}>
                <Box mt={1} mb={1}>
                    <div className={classes.status}>{status.label}</div>
                </Box>
                <div className={classes.wrapperListTask}>
                    {tasks.map(task => { return <TaskItem key={task.id} task={task} status={status}/> })}
                </div>
            </Grid>
        )
    }
}

export default withStyles(style)(TaskList);
