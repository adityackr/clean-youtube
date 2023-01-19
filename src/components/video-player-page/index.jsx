import { Box, Card, Container, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
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

	const opts = {
		height: '390',
		width: '640',
		playerVars: {
			autoplay: 1,
		},
	};

	const onPLayerReady = (event) => {
		event.target.pauseVideo();
	};
	return (
		<Container maxWidth="lg" sx={{ my: 16 }}>
			<YouTube
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					backgroundColor: '#0F0F0F',
				}}
				videoId={videoId}
				opts={opts}
				onReady={onPLayerReady}
			/>
			<Card sx={{ marginTop: 2, padding: 2, border: '1px #0F0F0F solid' }}>
				<Typography variant="h6" sx={{ marginBottom: 2 }}>
					{video.title}
				</Typography>
				<Typography variant="subtitle2">{video.description}</Typography>
			</Card>
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
