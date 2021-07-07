import mongoose from "mongoose";
import blogModel from "../models/blogsModel.js";

export const getBlogs = async (req, res) => {
	try {
		const blogs = await blogModel.find();
		res.status(200).json(blogs);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const getOneBlog = async (req, res) => {
	try {
		const { id } = req.params;
		const blog = await blogModel.findById(id);
		res.status(200).json(blog);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createBlog = async (req, res) => {
	const blogVal = req.body;
	const newBlog = new blogModel(blogVal);
	try {
		await newBlog.save();
		res.status(201).json(newBlog);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updateBlog = async (req, res) => {
	const { id } = req.params;
	const blog = req.body;

	if (mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No blog with this id");
	const updatedBlog = await blogModel.findByIdAndUpdate(id, blog, {
		new: true,
	});
	res.json(updatedBlog);
};

export const deleteBlog = async (req, res) => {
	const { id } = req.params;
	console.log(mongoose.Types.ObjectId.isValid(id));
	if (!mongoose.Types.ObjectId.isValid(id))
		return res.status(404).send("No blog with this id", id);

	await blogModel.findByIdAndRemove(id);

	res.json({ message: "Post deleted successfully" });
};
