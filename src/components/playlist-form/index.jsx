import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	TextField,
} from '@mui/material';
import { useStoreActions } from 'easy-peasy';
import { useState } from 'react';

const PlaylistForm = ({ open, handleClose }) => {
	const playlist = useStoreActions((actions) => actions.playlist);
	const [state, setState] = useState('');

	const handleSubmit = () => {
		if (!state) {
			alert('Please insert a valid playlist id.');
		} else {
			playlist.getPlaylist(state);
			setState('');
			handleClose();
		}
	};
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add Playlist Id</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Please insert a valid playlist id to add a new playlist. If the id is
					not valid, playlist information can't be fetched.
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
