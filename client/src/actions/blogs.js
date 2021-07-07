import * as api from "../api";

export const getBlogs = () => async (dispatch) => {
	try {
		const { data } = await api.fetchBlogs();
		const action = { type: "FETCH_ALL", payload: data };
		dispatch(action);
	} catch (error) {
		console.log(error.message);
	}
};

export const getOneBlog = (id) => async (dispatch) => {
	try {
		//console.log("FETCHING ONE BLOG WITH ID: ", id);
		const { data } = await api.fetchOneBlog(id);
		dispatch({ type: "FETCH_ONE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createBlog = (blog) => async (dispatch) => {
	try {
		const { data } = await api.createBlog(blog);
		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const updateBlog = (id, blog) => async (dispatch) => {
	try {
		const { data } = await api.updateBlog(id, blog);
		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error);
	}
};

export const deleteBlog = (id) => async (dispatch) => {
	try {
		await api.deleteBlog(id);
		dispatch({ type: "DELETE", payload: id });
	} catch (error) {
		console.log(error);
	}
};
