import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useStyles } from './step-style';

function GetSenderAddress ( props ) {
	const classes = useStyles();
	const {
		onAction,
		wizardContext: { from }
	} = props;
	const onClick = () => {
		onAction( 2 );
	};
	const [ localFrom, setLocalFrom ] = useState( from );
	const onChange = event => {
		const { target: { name, value } } = event;
		from[ name ] = value;

		setLocalFrom( { ...from } );
	};
	return (
		<>
			<form className={ classes.container }>
				<TextField
					id='sender-name'
					label='Name'
					value={ localFrom.name }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='name'
				/>
				<TextField
					id='sender-street'
					label='Street'
					value={ localFrom.street }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					fullWidth
					name='street'
				/>
				<TextField
					id='sender-city'
					label='City'
					value={ localFrom.city }
					onChange={ onChange }
					variant='outlined'
					className={ classes.textField }
					margin='normal'
					name='city'
				/>
				<TextField
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
					id='sender-zip'
					label='Zip'
					value={ localFrom.zip }
					onChange={ onChange }
					variant='outlined'
					className={ classes.textField }
					margin='normal'
					name='zip'
				/>
			</form>
			<div className={ classes.buttonGroup }>
				<Button
					variant='outlined'
					color='secondary'
					className={ classes.button }
					onClick={ onClick }
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