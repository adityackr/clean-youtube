import MenuIcon from '@mui/icons-material/Menu';
import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	Link,
	Menu,
	MenuItem,
	Stack,
	Toolbar,
	Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link as RouterLink, NavLink } from 'react-router-dom';
import routesData from '../../../data/routesData';
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
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

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
				<Container maxWidth="lg">
					<Toolbar
						disableGutters
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
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

						<Box
							sx={{
								display: { xs: 'flex', md: 'none' },
							}}
						>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
							>
								<MenuIcon sx={{ color: '#FFF' }} />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{routesData.map((route) => (
									<NavLink
										key={route.id}
										to={route.path}
										style={({ isActive }) =>
											isActive ? activeStyle : normalStyle
										}
									>
										<MenuItem onClick={handleCloseNavMenu}>
											<Typography variant="body2" color={'#0f0f0f'}>
												{route.name}
											</Typography>
										</MenuItem>
									</NavLink>
								))}
								<MenuItem onClick={handleCloseNavMenu}>
									<Button
										size="small"
										variant="contained"
										onClick={handleClickOpen}
										sx={{
											backgroundColor: '#FF0000',
											'&:hover': {
												border: '1px solid #FF0000',
												color: '#FF0000',
												backgroundColor: 'transparent',
											},
										}}
									>
										Add Playlist
									</Button>
								</MenuItem>
							</Menu>
						</Box>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								gap: 3,
								alignItems: 'center',
							}}
						>
							{routesData.map((route) => (
								<NavLink
									key={route.id}
									to={route.path}
									style={({ isActive }) =>
										isActive ? activeStyle : normalStyle
									}
									onClick={handleCloseNavMenu}
								>
									<Typography variant="body2">{route.name}</Typography>
								</NavLink>
							))}
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
						</Box>
						{/* <Stack>
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
							<Typography variant="subtitle2">By Aditya Chakraborty</Typography>
						</Link>
					</Stack> */}
						<PlaylistForm open={open} handleClose={handleClose} />
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
		/* <Box sx={{ flexGrow: 1, marginBottom: 16 }}>
			<AppBar
				position="fixed"
				color="default"
				sx={{ py: 2, backgroundColor: '#0F0F0F' }}
			>
				<Container maxWidth={'xl'}>
					<Toolbar
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
						disableGutters
					>
						<Stack>
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
						<Stack direction="row" spacing={3} alignItems="center">
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
						</Stack>
						<PlaylistForm open={open} handleClose={handleClose} />
					</Toolbar>
				</Container>
			</AppBar>
		</Box> */
	);
};

export default Navbar;
