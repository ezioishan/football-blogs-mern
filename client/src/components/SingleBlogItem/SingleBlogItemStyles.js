import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	card: {
		height: "100%",
		display: "flex",
		flexDirection: "column",
	},
	CardMedia: {
		paddingTop: "56.25%",
	},
	cardContent: {
		flexGrow: 1,
	},
}));

export default useStyles;
