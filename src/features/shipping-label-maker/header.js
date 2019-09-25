import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography'

function Header ( props ) {
	const { title, step } = props;
	return (
		<>
			<Typography variant='h5' component='h2'>
				{ title }
			</Typography>
			<LinearProgress
				variant='determinate'
				value={ step * 20 }
				color='secondary'
			/>
		</>
	);
}

Header.propTypes = {
	title: PropTypes.string.isRequired,
	step: PropTypes.number.isRequired
};

export default Header;