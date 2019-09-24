import React from 'react';
import Wizard from '../../core/components/wizard'
import GetSenderAddress from './steps/getSenderAddress';
import GetReceiverAddress from './steps/getReceiverAddress';
import GetWeight from './steps/getWeight';
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
	function onComplete () {}
	return (
		<Wizard
			steps={ [ GetSenderAddress, GetReceiverAddress, GetWeight ] }
			wizardContext={ ShippingInfo }
			onComplete={ onComplete }
			header={ Header }
		/>
	);
}

export default ShippingLabelMaker;