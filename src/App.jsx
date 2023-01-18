import { useEffect } from 'react';
import getPlaylist from './api';

const App = () => {
	useEffect(() => {
		async function fetchData() {
			const response = await getPlaylist('PL_XxuZqN0xVD0op-QDEgyXFA4fRPChvkl');
			console.log(response);
		}
		fetchData();
	}, []);
	return <div>App</div>;
};

export default App;
