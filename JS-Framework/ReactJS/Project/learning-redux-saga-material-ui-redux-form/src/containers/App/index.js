import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ADMIN_ROUTES } from '../../common/constants/routes';
import AdminLayoutRoute from '../../common/layouts/AdminLayoutRoute';
import theme from '../../common/theme';
import GlobalLoading from '../../components/GlobalLoading';
import Modal from '../../components/Modal';
import configureStore from '../../redux/configureStore';
import styles from './style';

const store = configureStore();

class App extends Component {
	renderAdminRoutes() {
		let xhtml = null;
		xhtml = ADMIN_ROUTES.map(route => {
			return (
				<AdminLayoutRoute
					key={route.path}
					path={route.path}
					exact={route.exact}
					component={route.component}
					name={route.name}
				/>
			);
		});
		return xhtml;
	}

	render() {
		return (
			<Provider store={store}>
				<Router>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						<ToastContainer />
						<GlobalLoading />
						<Modal />
						<Switch>{this.renderAdminRoutes()}</Switch>
					</ThemeProvider>
				</Router>
			</Provider>
		);
	}
}

export default withStyles(styles)(App);
