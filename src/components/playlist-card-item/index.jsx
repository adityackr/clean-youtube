import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Link as RouterLink } from 'react-router-dom';

const PlaylistCardItem = ({
	playlistThumbnail,
	playlistTitle,
	channelTitle,
	playlistId,
}) => {
	// const [favorite, setFavorite] = useState(false);
	const recent = useStoreActions((actions) => actions.recent);
	const favorites = useStoreActions((actions) => actions.favorites);
	const { items } = useStoreState((state) => state.favorites);
	console.log(items);

	const handleClick = () => {
		recent.addToRecent(playlistId);
	};

	const addFavorite = () => {
		// setFavorite(true);
		favorites.addToFavorites(playlistId);
	};

	const removeFavorite = () => {
		// setFavorite(false);
		favorites.removeFromFavorites(playlistId);
	};

	return (
		<Card
			sx={{
				width: playlistThumbnail.width,
				display: 'flex',
				flexDirection: 'column',
				margin: 1,
				paddingBottom: 2,
			}}
		>
			<Stack direction={'column'} alignItems="center">
				<Link
					to={`/player/${playlistId}`}
					component={RouterLink}
					sx={{ textDecoration: 'none' }}
					onClick={handleClick}
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
				</Link>
				{items.includes(playlistId) && (
					<FavoriteIcon
						onClick={removeFavorite}
						sx={{ color: '#FF0000', cursor: 'pointer' }}
					/>
				)}
				{!items.includes(playlistId) && (
					<FavoriteBorderIcon
						onClick={addFavorite}
						sx={{ color: '#FF0000', cursor: 'pointer' }}
					/>
				)}
			</Stack>
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
	);
};

export default PlaylistCardItem;
