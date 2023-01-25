import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FavoritesPage from './components/pages/favorites-page';
import HomePage from './components/pages/home-page';
import NotFound from './components/pages/not-found';
import PlaylistPage from './components/pages/playlist-page';
import RecentPage from './components/pages/recent-page';
import VideoPlayerPage from './components/pages/video-player-page';
import Navbar from './components/shared/navbar';
import ScrollToTop from './components/utils/scroll-to-top';

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
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
