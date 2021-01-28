import { motion } from "framer-motion";
import React from "react";
import Cards from "./components/Cards";
import profile from "./images/profile_pic2.png";
import {pageTransition, pageVariants} from "./transition"

const Projects = () => {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        >
            <section className="header">
                <div className="container">
                    <h1 className="display-3 about_header mt-2 text-center">
                        My Projects
                    </h1>
                    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-4">
                        <div class="col">
                            <Cards
                                imgsrc="https://picsum.photos/800/600"
                                hold={profile}
                                title="A"
                                text="lorem"
                                link=""
                            />
                        </div>
                        <div class="col">
                            <Cards
                                imgsrc="https://picsum.photos/800/600"
                                hold={profile}
                                title="A"
                                text="lorem"
                                link=""
                            />
                        </div>
                        <div class="col">
                            <Cards
                                imgsrc="https://picsum.photos/800/600"
                                hold={profile}
                                title="A"
                                text="lorem"
                                link=""
                            />
                        </div>
                        <div class="col">
                            <Cards
                                imgsrc="https://picsum.photos/800/600"
                                hold={profile}
                                title="A"
                                text="lorem"
                                link=""
                            />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Projects;
