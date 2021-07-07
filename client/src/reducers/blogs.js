const reducer = (blogs = [], action) => {
	switch (action.type) {
		case "UPDATE":
			return blogs.map((blog) =>
				blog._id === action.payload._id ? action.payload : blog
			);
		case "FETCH_ALL":
			return action.payload;
		case "FETCH_ONE":
			return action.payload;
		case "CREATE":
			return [...blogs, action.payload];
		case "DELETE":
			return blogs.filter((blog) => blog._id !== action.payload);
		default:
			return blogs;
	}
};

export default reducer;
