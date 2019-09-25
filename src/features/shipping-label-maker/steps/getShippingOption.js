import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './step-style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';


const shippingOptionUseStyles = makeStyles( theme => ( {
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'center',
		alignItems: 'center',
		height: 240
	}
} ) );

function GetShippingOption ( props ) {
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
	const [
		localShippingOption,
		setLocalShippingOption
	] = useState( wizardContext.shippingOption );
	const onChange = event => {
		const { target: { name, value } } = event;
		wizardContext[ name ] = value;

		setLocalShippingOption( value );
	};
	const classes = useStyles();
	const shippingOptionClasses = shippingOptionUseStyles();
	return (
		<>
			<form className={ shippingOptionClasses.container }>
				<TextField
					id='weight'
					select
					label='Shipping Options'
					className={ classes.textField }
					value={ localShippingOption }
					onChange={ onChange }
					helperText='Please select a shipping option'
					margin='normal'
					variant='outlined'
					name='shippingOption'
				>
					<MenuItem value="1">
						Ground
					</MenuItem>
					<MenuItem value="2">
						Priority
					</MenuItem>
				</TextField>
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

GetShippingOption.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default GetShippingOption;