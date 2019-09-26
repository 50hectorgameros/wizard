import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './step-style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ErrorNotifier from '../../../core/components/error-notifier/errorNotifier';

function GetReceiverAddress ( props ) {
	const {
		onAction,
		wizardContext: { to }
	} = props;
	// style hook
	const classes = useStyles();
	// state definitions
	const [ localTo, setLocalTo ] = useState( to );
		// state to handle the error notifier
	const [ open, setOpen ] = useState( false );
	const [ errorMessage, setErrorMessage ] = useState( '' );
		// state for handling different inputs' errors.
	const [ errors, setErrors ] = useState( {} );
	// handlers
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickNext = () => {
		const errorMessage = errorHandler();

		if ( errorMessage ) {
			setErrorMessage( errorMessage );
			return handleOpen();
		}
		onAction( 2 );
	};
	const onChange = event => {
		const { target: { name, value } } = event;
		to[ name ] = value;

		setLocalTo( { ...to } );
		setErrors( { ...errors, [ name ]: !value } );
	};
	const handleClose = () => setOpen( false );
	const handleOpen = () => setOpen( true );
	const errorHandler = () => {
		let errorMessage

		// check for errors in the form
		if ( Object.values( errors ).includes( true ) ) {
			errorMessage = 'Please check for errors';
			// validate that there are no empty fields
		} else if ( Object.values( to ).includes( '' ) ) {
			errorMessage = 'Please fill in the information before continuing.';
		}
		return errorMessage;
	};
	const onBlur = event => {
		const { target: { name, value } } = event;

		setErrors( { ...errors, [ name ]: !value } );
	};
	return (
		<>
			<ErrorNotifier
				open={ open }
				handleClose={ handleClose }
				errorMessage={ errorMessage }
			/>
			<form className={ classes.container }>
				<TextField
					onBlur={ onBlur }
					error={ errors.name }
					id='receiver-name'
					label='Name'
					value={ localTo.name }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='name'
				/>
				<TextField
					onBlur={ onBlur }
					error={ errors.street }
					id='receiver-street'
					label='Street'
					value={ localTo.street }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='street'
				/>
				<TextField
					onBlur={ onBlur }
					error={ errors.city }
					id='receiver-city'
					label='City'
					value={ localTo.city }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					name='city'
				/>
				<TextField
					onBlur={ onBlur }
					error={ errors.state }
					id='receiver-state'
					label='State'
					value={ localTo.state }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					name='state'
				/>
				<TextField
					onBlur={ onBlur }
					error={ errors.zip }
					type='number'
					id='receiver-zip'
					label='Zip'
					value={ localTo.zip }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
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
					onClick={ onClickPrevious }
				>
					Previous
				</Button>
				<Button
					variant='outlined'
					color='secondary'
					className={ classes.button }
					onClick={ onClickNext }
				>
					Next
				</Button>
			</div>
		</>
	);
}

GetReceiverAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetReceiverAddress;