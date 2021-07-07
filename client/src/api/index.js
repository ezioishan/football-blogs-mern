import axios from "axios";

const url_fetch = "http://localhost:5000/blogs/show";
const url_post = "http://localhost:5000/blogs/create";
const url_update = "http://localhost:5000/blogs/update";
const url_delete = "http://localhost:5000/blogs/delete";

export const fetchBlogs = () => axios.get(url_fetch);

export const fetchOneBlog = (id) => axios.get(`${url_fetch}/${id}`);

export const createBlog = (newBlog) => axios.post(url_post, newBlog);

export const updateBlog = (id, updatedBlog) =>
	axios.patch(`${url_update}/${id}`, updatedBlog);

export const deleteBlog = (id) => axios.delete(`${url_delete}/${id}`);
