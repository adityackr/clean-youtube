import { action, persist } from 'easy-peasy';

const recentModel = persist({
	items: [],
	addToRecent: action((state, playlistId) => {
		state.items.unshift(playlistId);
	}),
});

export default recentModel;
