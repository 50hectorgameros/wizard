import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GetSenderAddress ( props ) {
	const {
		onAction,
		wizardContext
	} = props;
	const onClickLeft = () => {
		onAction( 1 );
	};
	const onClickRight = () => {
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
			<label>Weight</label>
			<input
				type='number'
				name='weight'
				value={ localWeight }
				onChange={ onChange }
			/>
			<br />
			<input
				type='button'
				value='Back'
				onClick={ onClickLeft }
			/>
			<input
				type='button'
				value='Next'
				onClick={ onClickRight }
			/>
		</form>
	);
}

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;