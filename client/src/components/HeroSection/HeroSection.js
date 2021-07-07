import React from "react";

import { Typography, Container, Grid } from "@material-ui/core";

import useStyles from "./HeroSectionStyles";
import BlogDialogForm from "../BlogDialogForm/BlogDialogForm";

function HeroSection() {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Container maxWidth="sm">
				<Typography
					variant="h2"
					align="center"
					color="textPrimary"
					gutterBottom
				>
					Football Blogs
				</Typography>
				<Typography
					variant="h5"
					align="center"
					color="textSecondary"
					paragraph
				>
					A blogging site dedicated to show my love for football - the
					beautiful game
				</Typography>
				<div>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<BlogDialogForm currentId={null} />
						</Grid>
					</Grid>
				</div>
			</Container>
		</div>
	);
}

export default HeroSection;
