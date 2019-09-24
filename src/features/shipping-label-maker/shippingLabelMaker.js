import React from 'react';
import Wizard from '../../core/components/wizard'
import GetSenderAddress from './steps/getSenderAddress';

function ShippingLabelMaker () {
	return (
		<Wizard
			steps={ [ GetSenderAddress ] }
		/>
	);
}

export default ShippingLabelMaker;