import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( theme => ( {
	root: {
		display: 'flex',
		justifyContent: 'center',
		padding: theme.spacing( 2, 3 )
	},
	card: {
		maxWidth: 345
	}
} ) );

export default function ShippingLabel ( props ) {
	const classes = useStyles();
	const {
		onComplete,
		wizardContext: { to, from, weight, shippingOption },
		shippingCost
	} = props;
	const shippingValue =
		+shippingOption === 1 ? 'Ground' : +shippingOption === 2 ? 'Priority' : '';
	return (
		<div className={ classes.root }>
			<Card className={ classes.card }>
				<CardContent>
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
					<Typography variant='h5' component='h3'>
						Weight
					</Typography>
					<Typography component='p'>
						{ weight } kg
					</Typography>
					<Typography variant='h5' component='h3'>
						Shipping Option
					</Typography>
					<Typography component='p'>
						{ shippingValue }
					</Typography>
					<Typography variant='h5' component='h3'>
						Total cost
					</Typography>
					<Typography component='p'>
						${ shippingCost }
					</Typography>
				</CardContent>
				<CardActions>
					<Button
						size='medium'
						variant='outlined'
						color='secondary'
						className={ classes.button }
						onClick={ onComplete }
					>
						Done
					</Button>
				</CardActions>
			</Card>
		</div>
	);
};

ShippingLabel.propTypes = {
	onComplete: PropTypes.func.isRequired,
	wizardContext: PropTypes.object.isRequired,
	shippingCost: PropTypes.number.isRequired
};