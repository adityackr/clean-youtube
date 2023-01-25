import { Typography } from '@mui/material';
import { useStoreState } from 'easy-peasy';
import PageLayout from '../../shared/page-layout';

const HomePage = () => {
	const { data, isLoading } = useStoreState((state) => state.playlist);

	const playlistArray = Object.values(data);

	return (
		<PageLayout items={playlistArray} pageTitle={'My Playlist'}>
			{isLoading && (
				<Typography
					variant="h3"
					align="center"
					color={'#FF0000'}
					sx={{ marginBottom: 2 }}
				>
					Please wait...
				</Typography>
			)}
		</PageLayout>
	);
};

export default HomePage;
