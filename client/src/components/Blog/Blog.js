import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
	Container,
	Grid,
	Typography,
	Card,
	CardMedia,
	CardContent,
	Divider,
} from "@material-ui/core";

import useStyles from "./BlogStyles";
import { getOneBlog } from "../../actions/blogs";

function Blog() {
	const someText =
		"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
	let { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOneBlog(id));
	}, [dispatch, id]);
	const blog = useSelector((state) => state.blogs);
	console.log(blog);

	const classes = useStyles();
	return (
		<Container>
			<Grid container spacing={4}>
				<Grid key={blog._id} item xs={12} sm={12} md={12}>
					<Card className={classes.card}>
						<CardContent className={classes.CardContent}>
							<Typography gutterBottom variant="h5">
								{blog.title}
							</Typography>
							<Divider />
						</CardContent>

						<CardMedia
							className={classes.CardMedia}
							image={blog.selectedFile}
							title="Image title"
						/>
						{console.log("selected file : ", blog.selectedFile)}
						<CardContent className={classes.CardContent}>
							{/* <Typography>{someText}</Typography> */}
							<Typography>{blog.content}</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
}

export default Blog;
