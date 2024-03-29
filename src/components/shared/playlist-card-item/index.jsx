import DeleteIcon from '@mui/icons-material/Delete';
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
	deleteBtnDisplay,
}) => {
	const recent = useStoreActions((actions) => actions.recent);
	const favorites = useStoreActions((actions) => actions.favorites);
	const playlist = useStoreActions((actions) => actions.playlist);
	let favoritesItem = useStoreState((state) => state.favorites.items);
	let recentItem = useStoreState((state) => state.recent.items);

	const handleClick = () => {
		recent.addToRecent(playlistId);
	};

	const handleDelete = () => {
		const decision = confirm('Do you really want to delete this?');
		if (decision) {
			playlist.deletePlaylist(playlistId);
			let favoritesIndex = favoritesItem.findIndex(item => item === playlistId)
			favoritesItem = favoritesItem.splice(favoritesIndex, 1);
			const recentIndex = recentItem.findIndex((item) => item === playlistId);
			recentItem = recentItem.splice(recentIndex, 1);
		}
	};

	const addFavorite = () => {
		favorites.addToFavorites(playlistId);
	};

	const removeFavorite = () => {
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
				border: '1px solid #0F0F0F',
				'&:hover': {
					borderColor: '#FF0000',
					backgroundColor: '#b6b6b6',
				},
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
				<Stack direction="row" spacing={15}>
					{favoritesItem.includes(playlistId) && (
						<FavoriteIcon
							onClick={removeFavorite}
							sx={{ color: '#FF0000', cursor: 'pointer' }}
						/>
					)}
					{!favoritesItem.includes(playlistId) && (
						<FavoriteBorderIcon
							onClick={addFavorite}
							sx={{ color: '#FF0000', cursor: 'pointer' }}
						/>
					)}
					<DeleteIcon
						onClick={handleDelete}
						sx={{
							color: '#ff0000',
							cursor: 'pointer',
							display: deleteBtnDisplay,
						}}
					/>
				</Stack>
			</Stack>
		</Card>
	);
};

export default PlaylistCardItem;
