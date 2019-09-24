import React from 'react';
import PropTypes from 'prop-types';

function GetReceiverAddress ( props ) {
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