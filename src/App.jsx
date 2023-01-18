import { useStoreActions } from 'easy-peasy';
import { useEffect } from 'react';

const playlistID = 'PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl';

const App = () => {
	const playlist = useStoreActions((actions) => actions.playlist);
	useEffect(() => {
		playlist.getPlaylist(playlistID);
	}, []);
	return <div>App</div>;
};

export default App;
