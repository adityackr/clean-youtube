import { Box, Container, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import VideoLinkCard from '../../shared/video-link-card';
import NotFound from '../not-found';

const PlaylistPage = () => {
	const playlists = useStoreState((state) => state.playlist.data);
	const { playlistId } = useParams();
	const current = playlists[playlistId];
	if (!current) return <NotFound />;
	const playlistItems = current.playlistItems;
	console.log(playlistItems);

	return (
		<Container maxWidth="lg">
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
						title={item.title}
						thumbnail={item.thumbnail}
						playlistId={playlistId}
						videoId={item.contentDetails.videoId}
					/>
				))}
			</Box>
		</Container>
	);
};

export default PlaylistPage;
