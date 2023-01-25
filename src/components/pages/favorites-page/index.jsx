import { useStoreState } from 'easy-peasy';
import PageLayout from '../../shared/page-layout';

const FavoritesPage = () => {
	const playlists = useStoreState((state) => state.playlist.data);
	const favorites = useStoreState((state) => state.favorites.items);
	const favoritesArray = favorites.map((item) => playlists[item]);

	return (
		<PageLayout
			items={favoritesArray}
			pageTitle={'Favorite Playlists'}
			deleteBtnDisplay="none"
		/>
	);
};

export default FavoritesPage;
