import { useStoreState } from 'easy-peasy';
import PageLayout from '../../shared/page-layout';

const RecentPage = () => {
	const playlists = useStoreState((state) => state.playlist.data);
	const recent = useStoreState((state) => state.recent.items);
	const recentArray = recent.map((item) => playlists[item]).slice(0, 5);

	return <PageLayout items={recentArray} pageTitle={'Recent Playlists'} />;
};

export default RecentPage;
