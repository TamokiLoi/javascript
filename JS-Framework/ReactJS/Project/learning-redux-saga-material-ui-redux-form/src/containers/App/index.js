import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import theme from '../../common/theme';
import configureStore from '../../redux/configureStore';
import TaskBoard from '../TaskBoard';
import styles from './style';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<TaskBoard />
				</ThemeProvider>
			</Provider>
		);
	}
}

export default withStyles(styles)(App);
