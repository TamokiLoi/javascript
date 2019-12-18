import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../../../components/Dashboard';
import style from './style';

class AdminLayoutRoute extends Component {
	render() {
		const { component: YourComponent, ...remainProps } = this.props;
		return (
			<Route
				{...remainProps}
				render={routeProps => {
					return (
						<Dashboard {...remainProps}>
							<YourComponent {...routeProps} />
						</Dashboard>
					);
				}}
			/>
		);
	}
}

AdminLayoutRoute.propTypes = {
	path: PropTypes.string,
	name: PropTypes.string,
	exact: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default withStyles(style)(AdminLayoutRoute);
