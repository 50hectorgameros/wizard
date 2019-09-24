import React from 'react';
import Wizard from '../../core/components/wizard'
import GetSenderAddress from './steps/getSenderAddress';
import GetReceiverAddress from './steps/getReceiverAddress';
import Header from './header';

let ShippingInfo = {};

function ShippingLabelMaker () {
	function onComplete () {}
	return (
		<Wizard
			steps={ [ GetSenderAddress, GetReceiverAddress ] }
			wizardContext={ ShippingInfo }
			onComplete={ onComplete }
			header={ Header }
		/>
	);
}

export default ShippingLabelMaker;