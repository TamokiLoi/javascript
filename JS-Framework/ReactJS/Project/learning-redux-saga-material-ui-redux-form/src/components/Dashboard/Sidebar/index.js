import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import style from './style';

class Sidebar extends Component {
	render() {
		const { classes } = this.props;
		return <div className={classes.sidebar}>Sidebar</div>;
	}
}

Sidebar.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(style)(Sidebar);
