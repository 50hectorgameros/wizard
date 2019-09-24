import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GetReceiverAddress ( props ) {
	const {
		onAction,
		wizardContext: { to }
	} = props;
	const onClickLeft = () => {
		onAction( 1 );
	};
	const onClickRight = () => {
		onAction( 2 );
	};
	const [ localTo, setLocalTo ] = useState( to );
	const onChange = event => {
		const { target: { name, value } } = event;
		to[ name ] = value;

		setLocalTo( { ...to } );
	};
	return (
		<form>
			<label>Name:&nbsp;</label>
			<input
				type='text'
				name='name'
				value={ localTo.name }
				onChange={ onChange }
			/>
			<br />
			<label>Street:&nbsp;</label>
			<input
				type='text'
				name='street'
				value={ localTo.street }
				onChange={ onChange }
			/>
			<br />
			<label>City:&nbsp;</label>
			<input
				type='text'
				name='city'
				value={ localTo.city }
				onChange={ onChange }
			/>
			<label>State:&nbsp;</label>
			<input
				type='text'
				name='state'
				value={ localTo.state }
				onChange={ onChange }
			/>
			<label>Zip:&nbsp;</label>
			<input
				type='text'
				name='zip'
				value={ localTo.zip }
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

GetReceiverAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetReceiverAddress;