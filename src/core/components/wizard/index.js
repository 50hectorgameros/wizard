import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Wizard ( props ) {
	const {
		steps,
		wizardContext
	} = props;
	const lastStep = steps.length - 1;
	const [ step, setStep ] = useState( 0 );

	const onAction = action => {
		let newStep;

		switch ( action ) {
			case 1:
				if ( step === 0 ) {
					return;
				} else {
					newStep = step - 1;
				}
				break;
			case 2:
				if ( step === lastStep ) {
					return;
				} else {
					newStep = step + 1;
				}
				break;
			case 3:
				newStep = lastStep;
				break;
			default:
			 throw new Error( `Invalid option: ${ action }` );
		}

		setStep( newStep );
	};
	const Step = steps[ step ];
	return (
		<>
			{ header }
			<Step onAction={ onAction }/>
		</>
	);
}

Wizard.propTypes = {
	header: PropTypes.func.isRequired,
	steps: PropTypes.array.isRequired,
	wizardContext: PropTypes.object.isRequired,
	onComplete: PropTypes.func.isRequired
};

export default Wizard;