import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import style from './style';

class SearchBox extends Component {
	render() {
		const { classes, handleFilter } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					autoComplete="off"
					className={classes.textField}
					onChange={handleFilter}
					margin="normal"
					placeholder="Enter keyword..."
				/>
			</form>
		);
	}
}

SearchBox.propTypes = {
	classes: PropTypes.object,
	handleFilter: PropTypes.func,
};

export default withStyles(style)(SearchBox);
