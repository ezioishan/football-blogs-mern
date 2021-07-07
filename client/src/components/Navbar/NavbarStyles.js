import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	AppBar: {
		boxShadow: "none",
		opacity: "0.75",
	},
	logo: {
		textDecoration: "none",
		color: "white",
	},
	socialMediaLinks: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginRight: theme.spacing(2),
		marginLeft: theme.spacing(2),
	},
	instaIcon: {
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(1),
		textDecoration: "none",
		color: "white",
	},
	twitterIcon: {
		marginRight: theme.spacing(1),
		marginLeft: theme.spacing(1),
		textDecoration: "none",
		color: "white",
	},
}));

export default useStyles;
