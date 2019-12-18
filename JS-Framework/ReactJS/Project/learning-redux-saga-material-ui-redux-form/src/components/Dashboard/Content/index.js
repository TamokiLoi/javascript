import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import style from './style';

class Content extends Component {
	render() {
		const { classes } = this.props;
		return <div>Content</div>;
	}
}

Content.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(style)(Content);
