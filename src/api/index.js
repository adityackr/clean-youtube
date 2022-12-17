import axios from 'axios';

const key = import.meta.env.VITE_API_KEY;

const getPlaylistItem = async (playlistID, pageToken = '', result = []) => {
	const URL = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playlistID}&pageToken=${pageToken}`;

	const { data } = await axios.get(URL);
	result = [...result, ...data.items];
	if (data.nextPageToken) {
		result = getPlaylist(playlistID, data.nextPageToken, result);
	}
	return result;
};

const getPlaylist = async (playlistId) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

	const { data } = await axios.get(URL);
	let playlistItems = await getPlaylistItem(playlistId);

	const {
		title: playlistTitle,
		description: playlistDescription,
		thumbnails,
		channelId,
		channelTitle,
	} = data?.items[0]?.snippet;

	playlistItems = playlistItems.map((item) => {
		const {
			title,
			description,
			thumbnails: { medium },
		} = item.snippet;

		return {
			title,
			description,
			thumbnail: medium,
			contentDetails: item.contentDetails,
		};
	});

	return {
		playlistId,
		playlistTitle,
		playlistDescription,
		playlistThumbnail: thumbnails.default,
		channelId,
		channelTitle,
		playlistItems,
	};
};

export default getPlaylist;
