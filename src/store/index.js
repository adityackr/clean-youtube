import { createStore } from 'easy-peasy';
import favoritesModel from './favorites-model';
import playlistModel from './playlist-model';
import recentModel from './recent-model';

const store = createStore({
	playlist: playlistModel,
	recent: recentModel,
	favorites: favoritesModel,
});

export default store;
