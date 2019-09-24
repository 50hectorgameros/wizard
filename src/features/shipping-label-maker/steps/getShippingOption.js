import React, { useState } from 'react';
import PropTypes from 'prop-types';

function GetShippingOption ( props ) {
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
	const [
		localShippingOption,
		setLocalShippingOption
	] = useState( wizardContext.shippingOption );
	const onChange = event => {
		const { target: { name, value } } = event;
		wizardContext[ name ] = value;

		setLocalShippingOption( value );
	};
	return (
		<form>
			<label>Shipping Option:&nbsp;</label>
			<select
				name='shippingOption'
				value={ localShippingOption }
				onChange={ onChange }
			>
				<option></option>
				<option value="1">Ground</option>
				<option value="2">Priority</option>
			</select>
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

GetShippingOption.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetShippingOption;