import { action, persist } from 'easy-peasy';

const recentModel = persist(
	{
		items: [],
		addToRecent: action((state, playlistId) => {
			state.items.unshift(playlistId);
		}),
	},
	{
		storage: 'localStorage',
	}
);

export default recentModel;
