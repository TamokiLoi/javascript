const validate = values => {
	const errors = {};
	const { title } = values;

	if (!title) errors.title = 'Field is required!';
	else if (title.length < 5) errors.title = 'Must be 5 characters or more!';

	return errors;
};

export default validate;
