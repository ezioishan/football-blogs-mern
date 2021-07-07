import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import blogRoutes from "./routes/blogs.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/blogs", blogRoutes);

const CONNECTION_URL =
	"mongodb+srv://<username>:<pwd>@cluster0.fhlsd.mongodb.net/<db_name>?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
	.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() =>
		app.listen(PORT, () => console.log(`Server running at ${PORT}...`))
	)
	.catch((err) => console.log(err.message));
mongoose.set("useFindAndModify", false);
