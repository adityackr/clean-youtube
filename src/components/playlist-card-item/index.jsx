import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { useStoreActions } from 'easy-peasy';
import { Link as RouterLink } from 'react-router-dom';

const PlaylistCardItem = ({
	playlistThumbnail,
	playlistTitle,
	channelTitle,
	playlistId,
}) => {
	const recent = useStoreActions((actions) => actions.recent);

	const handleClick = () => {
		recent.addToRecent(playlistId);
	};

	return (
		<Link
			to={`/player/${playlistId}`}
			component={RouterLink}
			sx={{ textDecoration: 'none' }}
			onClick={handleClick}
		>
			<Card
				sx={{
					width: playlistThumbnail.width,
					display: 'flex',
					flexDirection: 'column',
					margin: 1,
				}}
			>
				<CardMedia
					component="img"
					sx={{
						width: playlistThumbnail.width,
						height: playlistThumbnail.height,
					}}
					image={playlistThumbnail.url}
					alt={playlistTitle}
				/>
				<CardContent>
					<Typography variant="h6" color="text.primary">
						{`${
							playlistTitle.length > 50
								? playlistTitle.substr(0, 50) + '...'
								: playlistTitle
						}`}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{channelTitle}
					</Typography>
				</CardContent>
				{/* <Box sx={{ flexGrow: 1 }}></Box> */}
				{/* <CardActions disableSpacing>
					<Button to={`/player/${playlistId}`} component={Link}>
						<Stack direction={'row'} spacing={1} alignItems={'center'}>
							<PlayCircleOutline sx={{ color: '#FF0000' }} />
							<Typography
								variant="body2"
								fontWeight={600}
								sx={{ color: '#FF0000' }}
							>
								Start Tutorial
							</Typography>
						</Stack>
					</Button>
				</CardActions> */}
			</Card>
		</Link>
	);
};

export default PlaylistCardItem;
