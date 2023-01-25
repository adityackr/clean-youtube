import { Container, Grid, Typography } from '@mui/material';
import PlaylistCardItem from '../playlist-card-item';

const PageLayout = ({ children, items, pageTitle }) => {
	return (
		<Container maxWidth={'lg'}>
			{children}
			<Typography
				variant="h4"
				align="center"
				sx={{ marginBottom: 2, textDecoration: 'underline' }}
			>
				{pageTitle}
			</Typography>
			{items.length === 0 && (
				<Typography variant="body2" align="center" sx={{ marginBottom: 2 }}>
					There is no playlist. Please add a new.
				</Typography>
			)}
			{items.length > 0 && (
				<Grid container alignItems="stretch" justifyContent="center">
					{items.map((item) => (
						<Grid item md={6} lg={4} mb={2} key={item.playlistId}>
							<PlaylistCardItem
								playlistId={item.playlistId}
								playlistThumbnail={item.playlistThumbnail}
								playlistTitle={item.playlistTitle}
								channelTitle={item.channelTitle}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Container>
	);
};

export default PageLayout;
