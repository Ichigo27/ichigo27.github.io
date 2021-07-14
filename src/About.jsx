import React from "react";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "./transition";
import { Helmet } from "react-helmet";

const About = () => {
    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Helmet>
				{/* <!-- HTML Meta Tags --> */}
				<title>About</title>
			</Helmet>
            <section className="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-10 mx-auto my-auto">
                            <h1 className="display-3 about_header">About Me</h1>
                            <br />
                            <p className="about_text">
                                Final year Computer Science undergraduate pursuing Bachelor of Engineering at Shah and Anchor Kutchhi Engineering College, Mumbai. I discovered my love for programming a few years ago and since then I can't get enough of it. I'm always thrilled to learn about new technologies, having a great interest in Web Development and AI. Aside from writing lines of code and killing bugs I really enjoy taking photos, exploring new destinations and riding my bicycle. My objective is to find a job within my chosen field that will challenge me and allow me to use my education, skills and past experiences in a way that is mutually beneficial to both myself and my employer and allow for future growth and advancement.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
