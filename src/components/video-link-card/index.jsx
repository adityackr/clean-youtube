import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Link,
	Stack,
	Typography,
} from '@mui/material';

const VideoLinkCard = ({ title, channelTitle, thumbnail, channelId }) => {
	return (
		<Card sx={{ marginTop: 3 }}>
			<Stack
				direction={{ sm: 'column', md: 'row' }}
				justifyContent="space-between"
				alignItems="center"
				spacing={{ sm: 1, md: 2 }}
			>
				<Box sx={{ display: 'flex', flexDirection: 'column' }}>
					<CardContent>
						<Typography
							component="div"
							variant="subtitle1"
							sx={{ fontWeight: 'bold ' }}
						>
							{title}
						</Typography>
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
				<CardMedia
					component="img"
					sx={{ width: thumbnail.width, height: thumbnail.height }}
					image={thumbnail.url}
					alt={title}
				/>
			</Stack>
		</Card>
	);
};

export default VideoLinkCard;
