import axios from 'axios';

const key = import.meta.env.VITE_API_KEY;

const getPlaylistItems = async (playlistId, pageToken = '', result = []) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=id%2CcontentDetails%2Csnippet&maxResults=20&playlistId=${playlistId}&key=${key}&pageToken=${pageToken}`;

	const { data } = await axios.get(URL);
	result = [...result, ...data.items];

	if (data.nextPageToken) {
		result = getPlaylistItems(playlistId, data.nextPageToken, result);
	}

	return result;
};

const getPlaylist = async (playlistId) => {
	const URL = `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&id=${playlistId}&key=${key}`;

	const { data } = await axios.get(URL);
	let playlistItems = await getPlaylistItems(playlistId);

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
		playlistItems,
		playlistId,
		playlistTitle,
		playlistDescription,
		playlistThumbnail: thumbnails.medium,
		channelId,
		channelTitle,
	};
};

export default getPlaylist;
