import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ClipLoader from "react-spinners/ScaleLoader";
import { Helmet } from "react-helmet";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Navbar from "./components/Navbar";
import Footer from "./Footer";

const options = {
	timeout: 5000,
	position: positions.TOP_CENTER,
};

const App = () => {
	const location = useLocation();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		console.log("loading");
		setTimeout(() => {
			setLoading(false);
			console.log("finished");
		}, 3000);
	}, []);

	return (
		<Provider template={AlertTemplate} {...options}>
			{loading ? (
				<div id="loading">
					<ClipLoader
						color={"#32e0c4"}
						loading={loading}
						height="300"
						width="35"
						radius="20"
						margin="7"
					/>
				</div>
			) : (
				<>
					<Helmet>
						{/* <!-- HTML Meta Tags --> */}
						<title>Amit Ramani</title>
						<meta
							name="description"
							content="Hi! My name is Amit Ramani, I am a Machine Learning and a Deep Learning enthusiast, currently pursuing Bachelor's Degree in Computer Science & Engineering from University of Mumbai."
						/>

						{/* <!-- Google / Search Engine Tags --> */}
						<meta itemprop="name" content="Amit Ramani" />
						<meta
							itemprop="description"
							content="Hi! My name is Amit Ramani, I am a Machine Learning and a Deep Learning enthusiast, currently pursuing Bachelor's Degree in Computer Science & Engineering from University of Mumbai."
						/>
						<meta
							itemprop="google-site-verification"
							content="fgf203gnqBEpaQOeJraSC9fc73_zD9QGUrMByR4Jwbo"
						/>
						{/* <!-- Facebook Meta Tags --> */}
						<meta
							property="og:url"
							content="https://ichigo27.github.io/"
						/>
						<meta property="og:type" content="website" />
						<meta property="og:title" content="Amit Ramani" />
						<meta
							property="og:description"
							content="Hi! My name is Amit Ramani, I am a Machine Learning and a Deep Learning enthusiast, currently pursuing Bachelor's Degree in Computer Science & Engineering from University of Mumbai."
						/>

						{/* <!-- Twitter Meta Tags --> */}
						<meta
							name="twitter:card"
							content="summary_large_image"
						/>
						<meta name="twitter:title" content="Amit Ramani" />
						<meta
							name="twitter:description"
							content="Hi! My name is Amit Ramani, I am a Machine Learning and a Deep Learning enthusiast, currently pursuing Bachelor's Degree in Computer Science & Engineering from University of Mumbai."
						/>
					</Helmet>
					<Navbar />
					<main style={{ overflowX: "hidden" }}>
						<AnimatePresence exitBeforeEnter>
							<Switch location={location} key={location.pathname}>
								<Route exact path="/" component={Home} />
								<Route exact path="/about" component={About} />
								<Route exact path="/skill" component={Skills} />
								<Route
									exact
									path="/project"
									component={Projects}
								/>
								<Route
									exact
									path="/experience"
									component={Experience}
								/>
								<Route
									exact
									path="/contact"
									component={Contact}
								/>
								<Redirect to="/" />
							</Switch>
						</AnimatePresence>
					</main>
					<Footer />
				</>
			)}
		</Provider>
	);
};

export default App;
