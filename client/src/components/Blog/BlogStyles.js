import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},

	CardMedia: {
		paddingTop: "56.25%",
		width: "100%",
		height: "300px",
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
	},
	cardContent: {
		flexGrow: "1",
	},
}));

export default useStyles;
