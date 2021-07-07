import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FileBase from "react-file-base64";

import { useDispatch } from "react-redux";
import { createBlog, updateBlog } from "../../actions/blogs";

function BlogDialogForm({ currentId }) {
	const [blogData, setblogData] = React.useState({
		author: "",
		title: "",
		description: "",
		content: "",
		selectedFile: "",
	});
	const [open, setOpen] = React.useState(false);
	const dispatch = useDispatch();
	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		//re-initialize the state
		// setblogData({
		// 	author: "",
		// 	title: "",
		// 	desc: "",
		// });
		setOpen(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (currentId === null) dispatch(createBlog(blogData));
		else {
			dispatch(updateBlog(currentId, blogData));
		}
		console.log("Creating new post...", blogData);
	};
	return (
		<div>
			{currentId ? (
				<Button size="small" color="primary" onClick={handleClickOpen}>
					Edit
				</Button>
			) : (
				<Button
					variant="outlined"
					color="primary"
					onClick={handleClickOpen}
				>
					Create Blog
				</Button>
			)}

			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="form-dialog-title"
			>
				<form method="POST" onSubmit={handleSubmit}>
					<DialogTitle id="form-dialog-title">
						{currentId ? "Edit blog" : "Create blog"}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Enter details below...
						</DialogContentText>

						<TextField
							autoFocus
							margin="dense"
							id="author"
							label="Author"
							type="text"
							fullWidth
							value={blogData.author}
							onChange={(e) =>
								setblogData({
									...blogData,
									author: e.target.value,
								})
							}
						/>
						<TextField
							margin="dense"
							id="title"
							label="Title"
							type="text"
							fullWidth
							value={blogData.title}
							onChange={(e) =>
								setblogData({
									...blogData,
									title: e.target.value,
								})
							}
						/>
						<TextField
							margin="dense"
							id="description"
							label="Description"
							type="text"
							fullWidth
							value={blogData.description}
							onChange={(e) =>
								setblogData({
									...blogData,
									description: e.target.value,
								})
							}
						/>
						<TextField
							margin="dense"
							id="content"
							label="Content"
							type="text"
							multiline
							fullWidth
							value={blogData.content}
							onChange={(e) =>
								setblogData({
									...blogData,
									content: e.target.value,
								})
							}
						/>
						<div>
							<FileBase
								type="file"
								multiple={false}
								onDone={({ base64 }) =>
									setblogData({
										...blogData,
										selectedFile: base64,
									})
								}
							/>
						</div>
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
							Create
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
}

export default BlogDialogForm;
