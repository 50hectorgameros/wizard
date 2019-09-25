import React from 'react';
import Wizard from './wizard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { act } from 'react-dom/test-utils';
import StepOne from './test/step1';
import StepTwo from './test/step2';
import StepThree from './test/step3';

Enzyme.configure( { adapter: new Adapter() } );

describe( 'Wizard moves from different steps', () => {
	let wizard = Enzyme.mount(
		<Wizard
			steps={ [
				StepOne,
				StepTwo,
				StepThree
			] }
			wizardContext={ {} }
			onComplete={ () => {} }
			header={ () => <div /> }
		/>
	);

	test( 'Wizard advances to next step', () => {
		// Advanced to next step
		act( () => wizard.find( 'button#next' ).props().onClick() );
		// update wrapper to reflect new content
		wizard.update();
		expect( wizard.find( 'p' ).text() ).toEqual( 'Step 2' );
	} );

	test( 'Wizard goes to previous step', () => {
		// Go back to previous update
		act( () => wizard.find( 'button#prev' ).props().onClick() );
		// update the wrapper accordingly 
		wizard.update();
		expect( wizard.find( 'p' ).text() ).toEqual( 'Step 1' );
	} );
	test( 'Wizard advances to next step', () => {
		act( () => wizard.find( 'button#next' ).props().onClick() );
		wizard.update();
		act( () => wizard.find( 'button#next' ).props().onClick() );
		wizard.update();
		expect( wizard.find( 'p' ).text() ).toEqual( 'Step 3' );
	} );
} );