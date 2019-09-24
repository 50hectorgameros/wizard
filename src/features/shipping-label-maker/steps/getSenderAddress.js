import React from 'react';
import PropTypes from 'prop-types';

function GetSenderAddress () {
	return (
		<form>
			<label>Name:&nbsp;</label>
			<input type='text' name='name' />
			<br />
			<label>Address:&nbsp;</label>
			<input type='text' name='address' />
			<br />
			<label>City:&nbsp;</label>
			<input type='text' name='city' />
			<label>State:&nbsp;</label>
			<input type='text' name='state' />
			<label>Zip:&nbsp;</label>
			<input type='text' name='zip' />
			<br />
			<input
				type='button'
				value='Next'
				onClick
			/>
		</form>
	);
}

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;