import { useEffect } from 'react';
import usePlaylists from './hooks/usePlaylists';

const App = () => {
	const { getPlaylistById, playlists, error, loading } = usePlaylists();

	useEffect(() => {
		getPlaylistById('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
	}, []);

	return <div>App</div>;
};

export default App;
