import React from "react";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useDispatch } from "react-redux";
import { deleteBlog } from "../../actions/blogs";

function BlogDeleteDialog({ currentId }) {
	const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(currentId);
		if (currentId === null) return;
		dispatch(deleteBlog(currentId));
	};
	return (
		<div>
			<Button size="small" color="primary" onClick={handleClickOpen}>
				Remove
			</Button>

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<form method="POST" onSubmit={handleSubmit}>
					<DialogTitle id="form-dialog-title">
						Remove blog
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Are you sure you want remove?
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button onClick={handleClose} color="primary">
							Cancel
						</Button>
						<Button
							onClick={handleClose}
							color="primary"
							type="submit"
						>
							Remove
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
}

export default BlogDeleteDialog;
