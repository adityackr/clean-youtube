import { Box, Container, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import VideoLinkCard from '../video-link-card';

const PlaylistPage = () => {
	const playlists = useStoreState((state) => state.playlist.data);
	const { playlistId } = useParams();
	const current = playlists[playlistId];
	const playlistItems = current.playlistItems;
	console.log(current);
	console.log(playlistItems);

	if (!current) return;

	return (
		<Container maxWidth={'lg'} sx={{ my: 16 }}>
			<Typography
				variant="h4"
				align="center"
				sx={{ marginBottom: 2, textDecoration: 'underline' }}
			>
				{current.playlistTitle}
			</Typography>
			<Typography variant="subtitle2">{current.playlistDescription}</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				{playlistItems.map((item) => (
					<VideoLinkCard
						key={item.contentDetails.videoId}
						channelTitle={current.channelTitle}
						channelId={current.channelId}
						title={item.title}
						thumbnail={item.thumbnail}
					/>
				))}
			</Box>
		</Container>
	);
};

export default PlaylistPage;
