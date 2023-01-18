import { PlayCircleOutline } from '@mui/icons-material';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Typography,
} from '@mui/material';
import { Box, Stack } from '@mui/system';
import { Link } from 'react-router-dom';

const PlaylistCardItem = ({
	playlistThumbnail,
	playlistTitle,
	channelTitle,
	playlistId,
}) => {
	return (
		<Card
			sx={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				margin: 1,
			}}
		>
			<CardMedia
				component="img"
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
			<Box sx={{ flexGrow: 1 }}></Box>
			<CardActions disableSpacing>
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
			</CardActions>
		</Card>
	);
};

export default PlaylistCardItem;
