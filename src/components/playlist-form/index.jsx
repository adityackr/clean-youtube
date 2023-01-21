import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { useState } from 'react';

const PlaylistForm = ({ open, handleClose }) => {
	const playlist = useStoreActions((actions) => actions.playlist);
	const { data, error } = useStoreState((state) => state.playlist);

	const [state, setState] = useState('');

	const handleSubmit = () => {
		if (!state) {
			alert('Please insert a valid id or link.');
			return;
		}

		if (state.includes('youtube.com')) {
			const id = state.split('=')[1];
			if (Object.keys(data).includes(id)) {
				alert('The playlist is already exists. Please enter a new one.');
			}
			playlist.getPlaylist(id);
			setState('');
			handleClose();
			return;
		}

		if (Object.keys(data).includes(state)) {
			alert('The playlist is already exists. Please enter a new one.');
		}

		playlist.getPlaylist(state);

		setState('');
		handleClose();
	};
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add Playlist Id or Link</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Please insert a valid playlist id or link to add a new playlist. If
					the id or link is not valid, playlist information can't be fetched.
				</DialogContentText>
				<TextField
					autoFocus
					margin="dense"
					label="Playlist Id"
					type="text"
					fullWidth
					variant="standard"
					onChange={(e) => setState(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button onClick={handleSubmit}>Add Playlist</Button>
			</DialogActions>
		</Dialog>
	);
};

export default PlaylistForm;
