import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Link,
	Stack,
	Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const activeClass = {
	color: '#FF0000',
	backgroundColor: '#0f0f0f',
	textDecoration: 'none',
};

const nonActiveClass = {
	backgroundColor: '#fff',
	color: '#0f0f0f',
	textDecoration: 'none',
};

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
						<NavLink
							to={`/player/${playlistId}/${videoId}`}
							style={({ isActive }) =>
								isActive ? activeClass : nonActiveClass
							}
						>
							<Typography
								component="div"
								variant="subtitle1"
								sx={{ fontWeight: 'bold ' }}
							>
								{title}
							</Typography>
						</NavLink>
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
				<NavLink
					to={`/player/${playlistId}/${videoId}`}
					style={({ isActive }) => (isActive ? activeClass : nonActiveClass)}
				>
					<CardMedia
						component="img"
						sx={{ width: thumbnail.width, height: thumbnail.height }}
						image={thumbnail.url}
						alt={title}
					/>
				</NavLink>
			</Stack>
		</Card>
	);
};

export default VideoLinkCard;
