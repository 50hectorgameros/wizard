import React, { useState } from 'react';
import Wizard from '../../core/components/wizard'
import GetSenderAddress from './steps/getSenderAddress';
import GetReceiverAddress from './steps/getReceiverAddress';
import GetWeight from './steps/getWeight';
import Confirm from './steps/confirm';
import GetShippingOption from './steps/getShippingOption';
import Header from './header';
import ShippingLabel from './shippingLabel'

const shippingRate = 0.4;
const ShippingOption = {
	ground: 1,
	priority: 2
};
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
		setLabelDone( true );
	}
	function shippingLabelOnComplete () {
		ShippingInfo = {
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

		setLabelDone( false );
		setNewLabel( false );
	}
	function createNewShippingLabel () {
		setNewLabel( true );
	}
	function getShippingCost () {
		const {
			weight,
			shippingOption
		} = ShippingInfo;
		return weight * shippingRate *
			( shippingOption === ShippingOption.ground ? 1 : 1.5 );
	}

	const [ labelDone, setLabelDone ] = useState( false );
	const [ newLabel, setNewLabel ] = useState( false );

	if ( labelDone ) {
		return (
			<ShippingLabel
				wizardContext={ ShippingInfo }
				onComplete={ shippingLabelOnComplete }
			/>
		);
	}
	return (
		<>
			{ !newLabel ?
				<button
					onClick={ createNewShippingLabel }
				>
					Create Shipping Label
				</button> :
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
				/> }
		</>
	);
}

export default ShippingLabelMaker;