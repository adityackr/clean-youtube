import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const VideoLinkCard = ({ title, channelTitle, thumbnail, channelId }) => {
	const theme = useTheme();

	return (
		<Card
			sx={{ display: 'flex', marginTop: 3, justifyContent: 'space-between' }}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column' }}>
				<CardContent sx={{ flex: '1 0 auto' }}>
					<Typography component="div" variant="h5">
						{title}
					</Typography>
					<Link
						href={`https://www.youtube.com/channel/${channelId}`}
						target={'_blank'}
						sx={{ textDecoration: 'none', color: '#000' }}
					>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							{channelTitle}
						</Typography>
					</Link>
				</CardContent>
			</Box>
			<CardMedia
				component="img"
				sx={{ width: thumbnail.width }}
				image={thumbnail.url}
				alt={title}
			/>
		</Card>
	);
};

export default VideoLinkCard;
