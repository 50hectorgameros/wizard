import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './step-style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function GetReceiverAddress ( props ) {
	const {
		onAction,
		wizardContext: { to }
	} = props;
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickNext = () => {
		onAction( 2 );
	};
	const [ localTo, setLocalTo ] = useState( to );
	const onChange = event => {
		const { target: { name, value } } = event;
		to[ name ] = value;

		setLocalTo( { ...to } );
	};
	const classes = useStyles();
	return (
		<>
			<form className={ classes.container }>
				<TextField
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