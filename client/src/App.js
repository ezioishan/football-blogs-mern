import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import BlogsSection from "./components/BlogsSection/BlogsSection";
import Blog from "./components/Blog/Blog";

function App() {
	return (
		<>
			<CssBaseline />
			<Navbar />
			<Router>
				<Switch>
					<Route path="/blog/:id">
						<Blog />
					</Route>
					<Route path="/">
						<main>
							<HeroSection />
							<BlogsSection />
						</main>
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
