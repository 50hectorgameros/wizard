import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GetSenderAddress ( props ) {
	const {
		onAction,
		wizardContext
	} = props;
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickNext = () => {
		onAction( 2 );
	};
	const [ localWeight, setLocalWeight ] = useState( wizardContext.weight );
	const onChange = event => {
		const { target: { name, value } } = event;
		wizardContext[ name ] = value;

		setLocalWeight( value );
	};
	return (
		<form>
			<label>Weight:&nbsp;</label>
			<input
				type='number'
				name='weight'
				min='0'
				value={ localWeight }
				onChange={ onChange }
			/>
			<br />
			<input
				type='button'
				value='Previous'
				onClick={ onClickPrevious }
			/>
			<input
				type='button'
				value='Next'
				onClick={ onClickNext }
			/>
		</form>
	);
}

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;