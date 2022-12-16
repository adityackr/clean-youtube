import { Stack } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';

const NavBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Stack spacing={1}>
						<Typography variant="h3">Clean Youtube</Typography>
						<Typography variant="body1">By Stack Learner</Typography>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavBar;
