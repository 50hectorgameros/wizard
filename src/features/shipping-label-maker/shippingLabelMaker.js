import React, { useState } from 'react';
import Wizard from '../../core/components/wizard'
import GetSenderAddress from './steps/getSenderAddress';
import GetReceiverAddress from './steps/getReceiverAddress';
import GetWeight from './steps/getWeight';
import Confirm from './steps/confirm';
import GetShippingOption from './steps/getShippingOption';
import Header from './header';
import ShippingLabel from './shippingLabel'
import AppBar from '@material-ui/core/AppBar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from'@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const shippingRate = 0.4;
const ShippingOption = {
	ground: 1,
	priority: 2
};
let ShippingInfo = {
	from: {
		name: '',
		street: '',
		city: '',
		state: '',
		zip: ''
	},
	to: {
		name: '',
		street: '',
		city: '',
		state: '',
		zip: ''
	},
	weight: 0,
	shippingOption: ''
};
const drawerWidth = 200;
const useStyles = makeStyles( theme => ( {
	root: {
		display: 'flex'
	},
	title: {
		flexGrow: 1
	},
	appBar: {
		transition: theme.transitions.create( [ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		} )
	},
	appBarShift: {
		width: `calc(100% - ${ drawerWidth }px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create( [ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		} )
	},
	menuButton: {
		marginRight: theme.spacing( 2 )
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing( 0, 1 ),
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing( 6, 3, 3 ),
		transition: theme.transitions.create( 'margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		} ),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create( 'margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		} ),
		marginLeft: 0
	}
} ) );

function ShippingLabelMaker () {
	function onComplete () {
		setLabelDone( true );
	}
	function shippingLabelOnComplete () {
		ShippingInfo = {
			from: {
				name: '',
				street: '',
				city: '',
				state: '',
				zip: ''
			},
			to: {
				name: '',
				street: '',
				city: '',
				state: '',
				zip: ''
			},
			weight: 0,
			shippingOption: ''
		};

		setLabelDone( false );
		setNewLabel( false );
	}
	function createNewShippingLabel () {
		setNewLabel( true );
	}
	function getShippingCost () {
		const {
			weight,
			shippingOption
		} = ShippingInfo;
		return +(
			weight * shippingRate *
			( shippingOption === ShippingOption.ground ? 1 : 1.5 )
		).toFixed( 2 );
	}

	const handleDrawerOpen = () => setOpen( true );
	const handleDrawerClose = () => setOpen( false );
	const [ labelDone, setLabelDone ] = useState( false );
	const [ newLabel, setNewLabel ] = useState( false );
	const [ open, setOpen ] = useState( false );
	const classes = useStyles();
	const theme = useTheme();

	if ( labelDone ) {
		return (
			<ShippingLabel
				wizardContext={ ShippingInfo }
				onComplete={ shippingLabelOnComplete }
				shippingCost= { getShippingCost() }
			/>
		);
	}
	return (
		<div className={ classes.root }>
			<CssBaseline />
			<AppBar
				position='fixed'
				className={ clsx( classes.appBar, {
					[ classes.appBarShift ]: open
				} ) }
			>
				<Toolbar>
					<IconButton
						edge='start'
						className={ classes.menuButton }
						color='inherit'
						aria-label='open drawer'
						onClick={ handleDrawerOpen }
						className={ clsx( classes.menuButton, open && classes.hide ) }
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' className={ classes.title }>
						Shipping Label Maker
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={ classes.drawer }
				variant='persistent'
				anchor='left'
				open={ open }
				classes={ {
					paper: classes.drawerPaper
				} }
			>
				<div className={ classes.drawerHeader }>
					<IconButton onClick={ handleDrawerClose }>
						{ theme.direction === 'ltr'
							? <ChevronLeftIcon />
							: <ChevronRightIcon /> }
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button>
						<ListItemIcon>
							<NoteAddIcon />
						</ListItemIcon>
						<ListItemText
							primary='Create Label'
							onClick={ createNewShippingLabel }
						/>
					</ListItem>
				</List>
			</Drawer>
			<main
				className={ clsx( classes.content, {
					[ classes.contentShift ]: open
				} ) }
			>
				{ newLabel &&
					<Wizard
						steps={ [
							GetSenderAddress,
							GetReceiverAddress,
							GetWeight,
							GetShippingOption,
							Confirm
						] }
						wizardContext={ ShippingInfo }
						onComplete={ onComplete }
						header={ Header }
					/> }
			</main>
		</div>
	);
}

export default ShippingLabelMaker;