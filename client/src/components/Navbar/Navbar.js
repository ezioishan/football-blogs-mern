import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";

import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import useStyles from "./NavbarStyles";

function Navbar() {
	const classes = useStyles();
	return (
		<>
			<AppBar position="relative" className={classes.AppBar}>
				<Toolbar>
					<Link href="/" className={classes.logo}>
						<Typography variant="h6" sm={2}>
							Ishan Sourav
						</Typography>
					</Link>
					<div className={classes.socialMediaLinks}>
						<Link
							className={classes.instaIcon}
							href="https://www.instagram.com/ishansourav/"
						>
							<InstagramIcon />
						</Link>
						<Link
							className={classes.instaIcon}
							href="https://twitter.com/mpsDoubles"
						>
							<TwitterIcon className={classes.twitterIcon} />
						</Link>
					</div>
				</Toolbar>
			</AppBar>
		</>
	);
}

export default Navbar;
