import { FormControl, FormHelperText, InputLabel, Select } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React from 'react';
import style from './style';

const renderFromHelper = ({ touched, error }) => {
	if (!(touched && error)) {
		return null;
	}
	return <FormHelperText>{touched && error}</FormHelperText>;
};

renderFromHelper.propTypes = {
	touched: PropTypes.bool,
	error: PropTypes.bool,
};

const renderSelectField = ({
	classes,
	input,
	label,
	meta: { touched, error },
	children,
	...custom
}) => (
	<FormControl className={classes.formControl} error={touched && error}>
		<InputLabel htmlFor="age-native-simple">{label}</InputLabel>
		<Select
			{...input}
			{...custom}
			inputProps={{
				name: 'age',
				id: 'age-native-simple',
			}}
			value={input.value}
		>
			{children}
		</Select>
		{renderFromHelper({ touched, error })}
	</FormControl>
);

renderSelectField.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object,
	children: PropTypes.array,
};

export default withStyles(style)(renderSelectField);
