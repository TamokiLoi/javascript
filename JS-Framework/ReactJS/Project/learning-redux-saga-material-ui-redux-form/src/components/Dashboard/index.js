import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import style from './style';

class Dashboard extends Component {
	render() {
		const { classes, children, name } = this.props;
		return (
			<div className={classes.dashboard}>
				<Header name={name} />
				<Sidebar />
				<div className={classes.children}>{children}</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
	classes: PropTypes.object,
	children: PropTypes.object,
	name: PropTypes.string,
};

export default withStyles(style)(Dashboard);
