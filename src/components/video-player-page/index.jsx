import { Box, Container, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import VideoLinkCard from '../video-link-card';

const VideoPlayerPage = () => {
	const playlists = useStoreState((state) => state.playlist.data);
	const { playlistId, videoId } = useParams();
	const current = playlists[playlistId];
	if (!current) return <NotFound />;
	const playlistItems = current.playlistItems;
	const video = playlistItems.filter(
		(item) => item.contentDetails.videoId === videoId
	)[0];
	return (
		<Container maxWidth="lg" sx={{ my: 16 }}>
			<Typography variant="h6" sx={{ marginBottom: 2 }}>
				{video.title}
			</Typography>
			<Typography variant="subtitle2">{video.description}</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				{playlistItems.map((item) => (
					<VideoLinkCard
						key={item.contentDetails.videoId}
						channelTitle={current.channelTitle}
						channelId={current.channelId}
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

export default VideoPlayerPage;
