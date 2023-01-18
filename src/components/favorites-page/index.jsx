import { Container, Grid, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import PlaylistCardItem from '../playlist-card-item';

const FavoritesPage = () => {
	const playlists = useStoreState((state) => state.playlist.data);
	const favorites = useStoreState((state) => state.favorites.items);
	const favoritesArray = favorites.map((item) => playlists[item]);
	console.log(favorites);

	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Typography
				variant="h4"
				align="center"
				sx={{ marginBottom: 2, textDecoration: 'underline' }}
			>
				Favorite Playlists
			</Typography>
			{favoritesArray.length > 0 && (
				<Grid container alignItems="stretch">
					{favoritesArray.map((item) => (
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

export default FavoritesPage;
