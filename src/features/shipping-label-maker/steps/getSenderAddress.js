import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GetSenderAddress ( props ) {
	const {
		onAction,
		wizardContext: { from }
	} = props;
	const onClick = () => {
		onAction( 2 );
	};
	const [ localFrom, setLocalFrom ] = useState( from );
	const onChange = event => {
		const { target: { name, value } } = event;
		from[ name ] = value;

		setLocalFrom( { ...from } );
	};
	return (
		<form>
			<label>Name:&nbsp;</label>
			<input
				type='text'
				name='name'
				value={ localFrom.name }
				onChange={ onChange }
			/>
			<br />
			<label>Address:&nbsp;</label>
			<input
				type='text'
				name='address'
				value={ localFrom.address }
				onChange={ onChange }
			/>
			<br />
			<label>City:&nbsp;</label>
			<input
				type='text'
				name='city'
				value={ localFrom.city }
				onChange={ onChange }
			/>
			<label>State:&nbsp;</label>
			<input
				type='text'
				name='state'
				value={ localFrom.state }
				onChange={ onChange }
			/>
			<label>Zip:&nbsp;</label>
			<input
				type='text'
				name='zip'
				value={ localFrom.zip }
				onChange={ onChange }
			/>
			<br />
			<input
				type='button'
				value='Next'
				onClick={ onClick }
			/>
		</form>
	);
}

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;