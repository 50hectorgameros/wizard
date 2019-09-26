import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './step-style';
import ErrorNotifier from '../../../core/components/error-notifier/errorNotifier';

function GetSenderAddress ( props ) {
	const {
		onAction,
		wizardContext: { from }
	} = props;
	const classes = useStyles();
	const nextHandler = () => {
		let errorMessage;

		// validate if the form has errors.
		if ( Object.values( errors ).includes( true ) ) {
			errorMessage = 'Please check for errors.';
			// validate that no field is empty
		} else if ( Object.values( from ).includes( '' ) ){
			errorMessage = 'Please fill in the information before continuing.'
		}
		// If there are errors, show error snackbar.
		if ( errorMessage ) {
			setErrorMessage( errorMessage );
			return handleOpen();
		}

		// call wizard handler
		onAction( 2 );
	};
	const handleClose = () => setOpen( false );
	const handleOpen = () => setOpen( true );
	const [ localFrom, setLocalFrom ] = useState( from );
	const [ errors, setErrors ] = useState( {} );
	const [ errorMessage, setErrorMessage ] = useState( '' );
	const [ open, setOpen ] = useState( false );
	const onBlur = event => {
		const { target: { name, value } } = event;

		setErrors( { ...errors, [ name ]: !value } )
	};
	const onChange = event => {
		const { target: { name, value } } = event;
		from[ name ] = value;

		setLocalFrom( { ...from } );
		setErrors( { ...errors, [ name ]: !value } )
	};
	return (
		<>
			<ErrorNotifier
				handleClose={ handleClose }
				open={ open }
				errorMessage={ errorMessage }
			/>
			<form className={ classes.container }>
				<TextField
					error={ errors.name }
					id='sender-name'
					label='Name'
					value={ localFrom.name }
					onChange={ onChange }
					onBlur={ onBlur }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='name'
				/>
				<TextField
					error={ errors.street }
					id='sender-street'
					label='Street'
					value={ localFrom.street }
					onChange={ onChange }
					onBlur={ onBlur }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='street'
				/>
				<TextField
					error={ errors.city }
					id='sender-city'
					label='City'
					value={ localFrom.city }
					onBlur={ onBlur }
					onChange={ onChange }
					variant='outlined'
					className={ classes.textField }
					margin='normal'
					name='city'
				/>
				<TextField
					error={ errors.state }
					onBlur={ onBlur }
					id='sender-state'
					label='State'
					value={ localFrom.state }
					onChange={ onChange }
					variant='outlined'
					className={ classes.textField }
					margin='normal'
					name='state'
				/>
				<TextField
					type='number'
					error={ errors.zip }
					onBlur={ onBlur }
					id='sender-zip'
					label='Zip'
					value={ localFrom.zip }
					onChange={ onChange }
					variant='outlined'
					className={ classes.textField }
					margin='normal'
					name='zip'
					inputProps={ {
						min: 0
					} }
				/>
			</form>
			<div className={ classes.buttonGroup }>
				<Button
					variant='outlined'
					color='secondary'
					className={ classes.button }
					onClick={ nextHandler }
				>
					Next
				</Button>
			</div>
		</>
	);
}

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;