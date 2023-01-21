import { action, persist } from 'easy-peasy';

const recentModel = persist(
	{
		items: [],
		addToRecent: action((state, playlistId) => {
			if (!state.items.includes(playlistId)) {
				state.items.unshift(playlistId);
			}
		}),
	},
	{
		storage: 'localStorage',
	}
);

export default recentModel;
