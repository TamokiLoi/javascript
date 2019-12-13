import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import style from './style';
import LoadingIcon from '../../assets/images/loading.gif';

class GlobalLoading extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.globalLoading}>
				<img src={LoadingIcon} alt="loading" className={classes.icon} />
			</div>
		);
	}
}

GlobalLoading.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(style)(GlobalLoading);
