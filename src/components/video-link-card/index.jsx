import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Link,
	Stack,
	Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const VideoLinkCard = ({
	title,
	channelTitle,
	thumbnail,
	channelId,
	playlistId,
	videoId,
}) => {
	return (
		<Card sx={{ marginTop: 3, border: '1px solid #FF0000' }}>
			<Stack
				direction={{ sm: 'column', md: 'row' }}
				justifyContent="space-between"
				alignItems="center"
				spacing={{ sm: 1, md: 2 }}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent>
						<Link
							to={`/player/${playlistId}/${videoId}`}
							component={RouterLink}
							sx={{ textDecoration: 'none' }}
						>
							<Typography
								component="div"
								variant="subtitle1"
								sx={{ fontWeight: 'bold ' }}
							>
								{title}
							</Typography>
						</Link>
						<Link
							href={`https://www.youtube.com/channel/${channelId}`}
							target={'_blank'}
							sx={{ textDecoration: 'none', color: '#000' }}
						>
							<Typography
								variant="subtitle2"
								color="text.secondary"
								component="div"
							>
								{channelTitle}
							</Typography>
						</Link>
					</CardContent>
				</Box>
				<Link
					to={`/player/${playlistId}/${videoId}`}
					component={RouterLink}
					sx={{ textDecoration: 'none' }}
				>
					<CardMedia
						component="img"
						sx={{ width: thumbnail.width, height: thumbnail.height }}
						image={thumbnail.url}
						alt={title}
					/>
				</Link>
			</Stack>
		</Card>
	);
};

export default VideoLinkCard;
