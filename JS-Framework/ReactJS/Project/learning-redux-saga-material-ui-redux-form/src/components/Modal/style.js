const styles = theme => ({
	modal: {
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		position: 'absolute',
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
	},
	header: {
		backgroundColor: theme.color.primary,
		color: theme.color.textColor,
		padding: theme.spacing(2),
		display: 'flex',
		alignItem: 'center',
		justifyContent: 'space-between',
	},
	title: {
		color: theme.color.textColor,
		fontWeight: 700,
		textTransform: 'capitalize',
	},
	icon: {
		cursor: 'pointer',
	},
	content: {
		padding: theme.spacing(2),
	},
});

export default styles;
