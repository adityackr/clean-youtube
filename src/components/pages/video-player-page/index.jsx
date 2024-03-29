import { Box, Button, Card, Container, Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import VideoLinkCard from '../../shared/video-link-card';
import NotFound from '../not-found';

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
		height: '480',
		width: '854',
		playerVars: {
			autoplay: 0,
		},
	};

	const onPLayerReady = (event) => {
		event.target.pauseVideo();
	};
	return (
		<Container maxWidth="lg">
			<Box>
				<YouTube
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						backgroundColor: '#b6b6b6',
					}}
					videoId={videoId}
					opts={opts}
					onReady={onPLayerReady}
				/>
			</Box>
			<Card sx={{ marginTop: 2, padding: 2, border: '1px #0F0F0F solid' }}>
				<Button
					variant="outlined"
					href={`https://www.youtube.com/channel/${current.channelId}`}
					target={'_blank'}
				>
					{current.channelTitle}
				</Button>
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
