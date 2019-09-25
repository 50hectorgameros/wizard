import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './step-style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const weightUseStyles = makeStyles( theme => ( {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: 240
	}
} ) );

function GetSenderAddress ( props ) {
	const {
		onAction,
		wizardContext
	} = props;
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickNext = () => {
		onAction( 2 );
	};
	const [ localWeight, setLocalWeight ] = useState( wizardContext.weight );
	const onChange = event => {
		const { target: { name, value } } = event;
		wizardContext[ name ] = value;

		setLocalWeight( value );
	};
	const classes = useStyles();
	const weightClasses = weightUseStyles();
	return (
		<>
			<form className={ weightClasses.container }>
				<TextField
					type='number'
					id='weight'
					label='Weight'
					value={ localWeight }
					onChange={ onChange }
					variant='outlined'
					margin='normal'
					className={ classes.textField }
					name='weight'
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

GetSenderAddress.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetSenderAddress;