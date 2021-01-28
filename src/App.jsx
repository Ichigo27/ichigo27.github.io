import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import ClipLoader from "react-spinners/ScaleLoader";
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
    position: positions.TOP_CENTER
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
