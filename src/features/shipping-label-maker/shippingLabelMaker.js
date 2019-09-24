import React from 'react';
import Wizard from '../../core/components/wizard'
import GetSenderAddress from './steps/getSenderAddress';
import GetReceiverAddress from './steps/getReceiverAddress';
import GetWeight from './steps/getWeight';
import Confirm from './steps/confirm';
import GetShippingOption from './steps/getShippingOption';
import Header from './header';

let ShippingInfo = {
	from: {
		name: '',
		street: '',
		city: '',
		state: '',
		zip: ''
	},
	to: {
		name: '',
		street: '',
		city: '',
		state: '',
		zip: ''
	},
	weight: 0,
	shippingOption: ''
};

function ShippingLabelMaker () {
	function onComplete () {
		console.log( 'Done' );
	}
	return (
		<Wizard
			steps={ [
				GetSenderAddress,
				GetReceiverAddress,
				GetWeight,
				GetShippingOption,
				Confirm
			] }
			wizardContext={ ShippingInfo }
			onComplete={ onComplete }
			header={ Header }
		/>
	);
}

export default ShippingLabelMaker;