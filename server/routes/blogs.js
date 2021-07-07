import express from "express";

import {
	getBlogs,
	getOneBlog,
	createBlog,
	updateBlog,
	deleteBlog,
} from "../controllers/blogs.js";

const router = express.Router();

router.get("/show", getBlogs);

router.get("/show/:id", getOneBlog);

router.post("/create", createBlog);

router.patch("/update/:id", updateBlog);

router.delete("/delete/:id", deleteBlog);

// router.get("/show", (req, res) => {});

export default router;
