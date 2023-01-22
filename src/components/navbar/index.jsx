import {
	AppBar,
	Box,
	Button,
	Container,
	Link,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import routesData from '../../data/routesData';
import PlaylistForm from '../playlist-form';

const activeStyle = {
	textDecoration: 'none',
	color: '#fff',
	borderBottom: '3px solid #FF0000',
};

const normalStyle = {
	textDecoration: 'none',
	color: '#fff',
};

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Box sx={{ flexGrow: 1, marginBottom: 16 }}>
			<AppBar
				position="fixed"
				color="default"
				sx={{ py: 2, backgroundColor: '#0F0F0F' }}
			>
				<Container maxWidth={'lg'}>
					<Toolbar>
						<Stack sx={{ flexGrow: 1 }}>
							<Link
								to="/"
								component={RouterLink}
								sx={{ textDecoration: 'none', color: '#fff' }}
							>
								<Typography variant="h5">Clean YouTube</Typography>
							</Link>
							<Link
								href="https://github.com/adityackr"
								target={'_blank'}
								sx={{ textDecoration: 'none', color: '#fff' }}
							>
								<Typography variant="subtitle2">
									By Aditya Chakraborty
								</Typography>
							</Link>
						</Stack>
						<Stack sx={{ flexGrow: 1 }} direction="row" spacing={3}>
							{routesData.map((route) => (
								<NavLink
									key={route.id}
									to={route.path}
									style={({ isActive }) =>
										isActive ? activeStyle : normalStyle
									}
								>
									<Typography variant="body2">{route.name}</Typography>
								</NavLink>
							))}
						</Stack>
						<Button
							size="small"
							variant="contained"
							onClick={handleClickOpen}
							sx={{
								backgroundColor: '#FF0000',
								'&:hover': {
									border: '1px solid #FF0000',
									color: '#fff',
									backgroundColor: 'transparent',
								},
							}}
						>
							Add Playlist
						</Button>
						<PlaylistForm open={open} handleClose={handleClose} />
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Navbar;
