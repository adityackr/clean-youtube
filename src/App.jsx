import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from './components/favorites-page';
import HomePage from './components/home-page';
import Navbar from './components/navbar';
import NotFound from './components/not-found';
import PlaylistPage from './components/playlist-page';
import RecentPage from './components/recent-page';
import VideoPlayerPage from './components/video-player-page';

const App = () => {
	return (
		<BrowserRouter>
			<CssBaseline />
			<Navbar />
			<Routes>
				<Route
					path="/player/:playlistId/:videoId"
					element={<VideoPlayerPage />}
				/>
				<Route path="/player/:playlistId" element={<PlaylistPage />} />
				<Route path="/recent" element={<RecentPage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
				<Route path="/" element={<HomePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
