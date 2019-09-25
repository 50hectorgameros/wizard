import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './step-style';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

const confirmUseStyles = makeStyles( theme => ( {
	root: {
		display: 'flex',
		justifyContent: 'space-evenly',
		margin: theme.spacing( 2 , 1, 0 ),
		height: 240 - theme.spacing( 1 )
	},
	paperContainer: {
		padding: theme.spacing( 2, 3 )
	}
} ) );

function Confirm ( props ) {
	const classes = useStyles();
	const confirmClasses = confirmUseStyles();
	const {
		onAction,
		wizardContext: { to, from, weight, shippingOption }
	} = props;
	const onClickPrevious = () => {
		onAction( 1 );
	};
	const onClickEnd = () => {
		onAction( 3 );
	};
	const shippingValue =
		+shippingOption === 1 ? 'Ground' : +shippingOption === 2 ? 'Priority' : '';
	return (
		<>
			<div className={ confirmClasses.root }>
				<Paper className={ confirmClasses.paperContainer }>
					<Typography variant='h5' component='h3'>
						Sender Information
					</Typography>
					<Typography component='p'>
						Name: { from.name }
					</Typography>
					<Typography component='p'>
						Street: { from.street }
					</Typography>
					<Typography component='p'>
						City: { from.city }
					</Typography>
					<Typography component='p'>
						State: { from.state }
					</Typography>
					<Typography component='p'>
						zip code: { from.zip }
					</Typography>
				</Paper>
				<Paper className={ confirmClasses.paperContainer }>
					<Typography variant='h5' component='h3'>
						Receiver Information
					</Typography>
					<Typography component='p'>
						Name: { to.name }
					</Typography>
					<Typography component='p'>
						Street: { to.street }
					</Typography>
					<Typography component='p'>
						City: { to.city }
					</Typography>
					<Typography component='p'>
						State: { to.state }
					</Typography>
					<Typography component='p'>
						zip code: { to.zip }
					</Typography>
				</Paper>
				<Paper className={ confirmClasses.paperContainer }>
					<Typography variant='h5' component='h3'>
						Weight
					</Typography>
					<Typography component='p'>
						{ weight } kg
					</Typography>
				</Paper>
				<Paper className={ confirmClasses.paperContainer }>
					<Typography variant='h5' component='h3'>
						Shipping Option
					</Typography>
					<Typography component='p'>
						{ shippingValue }
					</Typography>
				</Paper>
			</div>
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
					onClick={ onClickEnd }
				>
					End
				</Button>
			</div>
		</>
	);
}

Confirm.propTypes = {
	wizardContext: PropTypes.object.isRequired,
	onAction: PropTypes.func.isRequired
};

export default Confirm;