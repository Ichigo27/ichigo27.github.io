import { motion } from "framer-motion";
import React from "react";
import {pageTransition, pageVariants} from "./transition"

const About = () => {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        >
            <section className="header">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-10 mx-auto my-auto">
                            <h1 className="display-3 about_header">About Me</h1>
                            <br />
                            <p className="about_text">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Vitae modi minima eum
                                veritatis dolores placeat soluta nostrum tempore
                                aliquid pariatur ut aliquam nemo necessitatibus
                                adipisci expedita ratione architecto dignissimos
                                sed? Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Vel ratione qui voluptatum
                                quod et quaerat dolorum odio consequuntur
                                dolores! Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Vitae modi minima eum
                                veritatis dolores placeat soluta nostrum tempore
                                aliquid pariatur ut aliquam nemo necessitatibus
                                adipisci expedita ratione architecto dignissimos
                                sed? Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Vel ratione qui voluptatum
                                quod et quaerat dolorum odio consequuntur
                                dolores!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default About;
