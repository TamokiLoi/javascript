import React, { Component } from 'react'
import style from './style';
import { withStyles } from '@material-ui/styles';
import { STATUSES } from '../../common/constants';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import TaskList from '../../components/TaskList';

const listTask = [
    { id: 1, title: 'Read book', description: 'read material ui book', status: 0 },
    { id: 2, title: 'Play game', description: 'play game LOL', status: 1 },
    { id: 3, title: 'Play with family', description: 'play with family in house', status: 2 },
]

class TaskBoard extends Component {

    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map(status => {
                        return <TaskList
                            key={status.value}
                            tasks={listTask.filter(task => task.status === status.value)}
                            status={status}
                        />
                    })
                }
            </Grid>
        );
        return xhtml;
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskBoard}>
                <Button variant="contained" color="primary" className={classes.button}>
                    <Icon>add_icon</Icon> Add New Task
                </Button>
                {this.renderBoard()}
            </div>
        )
    }
}

export default withStyles(style)(TaskBoard);
