import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import theme from '../../common/theme';
import TaskBoard from '../TaskBoard';
import styles from './style';

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<TaskBoard />
			</ThemeProvider>
		);
	}
}

export default withStyles(styles)(App);
