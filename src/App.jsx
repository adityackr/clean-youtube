import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page';
import Navbar from './components/navbar';

const App = () => {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				{/* <Route
					path="/player/:playlistId"
					element={<PlayerPage playlists={playlists} />}
				/>
				<Route path="*" element={<NotFound />} /> */}
			</Routes>
		</BrowserRouter>
	);
};

export default App;
