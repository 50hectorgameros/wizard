import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';

function Header ( props ) {
	const { title, step } = props;
	return (
		<>
			<h1>{ title }</h1>
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