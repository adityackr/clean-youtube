import { Container, Grid, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import PlaylistCardItem from '../playlist-card-item';

const RecentPage = () => {
	const playlists = useStoreState((state) => state.playlist.data);
	const recent = useStoreState((state) => state.recent.items);
	const recentArray = recent.map((item) => playlists[item]).slice(0, 5);

	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Typography
				variant="h4"
				align="center"
				sx={{ marginBottom: 2, textDecoration: 'underline' }}
			>
				Recent Playlists
			</Typography>
			{recentArray.length > 0 && (
				<Grid container alignItems="stretch">
					{recentArray.map((item) => (
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

export default RecentPage;
