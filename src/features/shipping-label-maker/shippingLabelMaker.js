import React from 'react';
import Wizard from '../../core/components/wizard'
import GetSenderAddress from './steps/getSenderAddress';
import Header from './header';

let ShippingInfo = {};

function ShippingLabelMaker () {
	function onComplete () {}
	return (
		<Wizard
			steps={ [ GetSenderAddress ] }
			wizardContext={ ShippingInfo }
			onComplete={ onComplete }
			header={ Header }
		/>
	);
}

export default ShippingLabelMaker;