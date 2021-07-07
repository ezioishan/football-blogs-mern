import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
	title: String,
	author: String,
	description: String,
	content: String,
	tags: [String],
	selectedFile: String,
	createdAt: {
		type: Date,
		default: new Date(),
	},
});

const blogModel = mongoose.model("BlogModel", blogSchema);

export default blogModel;
