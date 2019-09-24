import React from 'react';
import PropTypes from 'prop-types';

function Confirm ( props ) {
	const {
		onAction,
		wizardContext: { to, from, weight, shippingOption }
	} = props;
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickEnd = () => {
		onAction( 3 );
	};
	const shippingValue =
		+shippingOption === 1 ? 'Ground' : +shippingOption === 2 ? 'Priority' : '';
	return (
		<>
			<h2>Sender Information</h2>
			<p>Name: { from.name }</p>
			<p>Street: { from.street }</p>
			<p>City: { from.city }</p>
			<p>State: { from.state }</p>
			<p>zip code: { from.zip }</p>
			<h2>Receiver Information</h2>
			<p>Name: { to.name }</p>
			<p>Street: { to.street }</p>
			<p>City: { to.city }</p>
			<p>State: { to.state }</p>
			<p>zip code: { to.zip }</p>
			<h3>weight: { weight }</h3>
			<h3>Shipping Option: { shippingValue }</h3>
			<form>
				<input
					type='button'
					value='Previous'
					onClick={ onClickPrevious }
				/>
				<input
					type='button'
					value='End'
					onClick={ onClickEnd }
				/>
			</form>
		</>
	);
}

Confirm.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default Confirm;