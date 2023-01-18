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
import { Link as RouterLink } from 'react-router-dom';
import PlaylistForm from '../playlist-form';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
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
								<Typography variant="h4">Clean YouTube</Typography>
							</Link>
							<Link
								href="https://github.com/adityackr"
								target={'_blank'}
								sx={{ textDecoration: 'none', color: '#fff' }}
							>
								<Typography variant="body1">By Aditya Chakraborty</Typography>
							</Link>
						</Stack>
						<Stack sx={{ flexGrow: 1 }} direction="row" spacing={3}>
							<Link
								to="/"
								component={RouterLink}
								sx={{
									textDecoration: 'none',
									color: '#fff',
									'&:hover': {
										borderBottom: '2px solid #FF0000',
									},
								}}
							>
								<Typography variant="h6">Home</Typography>
							</Link>
							<Link
								to="/recent"
								component={RouterLink}
								sx={{
									textDecoration: 'none',
									color: '#fff',
									'&:hover': {
										borderBottom: '2px solid #FF0000',
									},
								}}
							>
								<Typography variant="h6">Recent</Typography>
							</Link>
							<Link
								to="/favorites"
								component={RouterLink}
								sx={{
									textDecoration: 'none',
									color: '#fff',
									'&:hover': {
										borderBottom: '2px solid #FF0000',
									},
								}}
							>
								<Typography variant="h6">Favorites</Typography>
							</Link>
						</Stack>
						<Button
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
