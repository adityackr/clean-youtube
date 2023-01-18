import { Container, Grid, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import PlaylistCardItem from '../playlist-card-item';

const HomePage = () => {
	const playlists = useStoreState((state) => state.playlist.data);

	const playlistArray = Object.values(playlists);

	console.log(playlistArray);

	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Typography
				variant="h4"
				align="center"
				sx={{ marginBottom: 2, textDecoration: 'underline' }}
			>
				My Playlists
			</Typography>
			{playlistArray.length > 0 && (
				<Grid container alignItems="stretch">
					{playlistArray.map((item) => (
						<Grid item xs={12} md={6} lg={4} mb={2} key={item.playlistId}>
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

export default HomePage;
