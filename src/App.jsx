import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/home-page';
import Navbar from './components/navbar';
import NotFound from './components/not-found';
import PlaylistPage from './components/playlist-page';
import RecentPage from './components/recent-page';

const App = () => {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Navbar />
			<Routes>
				<Route path="/player/:playlistId" element={<PlaylistPage />} />
				<Route path="/recent" element={<RecentPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
