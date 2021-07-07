import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Grid, CircularProgress } from "@material-ui/core";

import SingleBlogItem from "../SingleBlogItem/SingleBlogItem";

import useStyles from "./BlogsSectionStyles";
import { getBlogs } from "../../actions/blogs";

function BlogsSection() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getBlogs());
	}, [dispatch]);

	const blogs = useSelector((state) => state.blogs);
	const classes = useStyles();

	return !blogs.length ? (
		<CircularProgress />
	) : (
		<Container className={classes.cardGrid} maxWidth="md">
			<Grid container spacing={4}>
				{blogs.map((blog) => {
					return (
						<Grid key={blog._id} item xs={12} sm={6} md={4}>
							<SingleBlogItem blog={blog} />
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

export default BlogsSection;
