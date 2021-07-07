import React from "react";
import {
	Typography,
	Button,
	Card,
	CardMedia,
	CardContent,
	CardActions,
	Link,
} from "@material-ui/core";

import useStyles from "./SingleBlogItemStyles";
import BlogDialogForm from "../BlogDialogForm/BlogDialogForm";
import BlogDeleteDialog from "../BlogDeleteDialog/BlogDeleteDialog";

function SingleBlogItem({ blog }) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.CardMedia}
				image={blog.selectedFile}
				title="Image title"
			/>
			<CardContent className={classes.CardContent}>
				<Typography gutterBottom variant="h5">
					{blog.title}
				</Typography>
				<Typography>{blog.description}</Typography>
			</CardContent>
			<CardActions>
				<Button size="small" color="primary">
					<Link href={`/blog/${blog._id}`}>View</Link>
				</Button>
				{/* <Button size="small" color="primary">
					Edit
				</Button> */}
				<BlogDialogForm currentId={blog._id} />
				<BlogDeleteDialog currentId={blog._id} />
			</CardActions>
		</Card>
	);
}

export default SingleBlogItem;
