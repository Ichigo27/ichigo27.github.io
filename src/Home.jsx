import React from "react";
import profile from "./images/profile_pic2.png";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {pageTransition, pageVariants} from "./transition"

const Home = () => {
    var app = document.getElementById("dev_text");

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <section className="d-flex align-items-center header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-9 ms-auto me-auto">
                            <div className="row align-items-center">
                                <div className="col-md-6 pt-md-5 pt-lg-0 order-2 order-lg-1 text-center text-lg-start">
                                    <h1 className="fw-bolder display-3">
                                        Hi, my name is{" "}
                                        <span className="greenText">
                                            Amit Ramani
                                        </span>
                                    </h1>
                                    <h2 className="fw-bold my-3">
                                        <Typewriter
                                            options={{
                                                loop: "true",
                                            }}
                                            onInit={(typewriter) => {
                                                typewriter
                                                    .typeString("I'm a ")
                                                    .pauseFor(500)
                                                    .typeString(
                                                        "Full Stack Web Developer"
                                                    )
                                                    .pauseFor(500)
                                                    .deleteChars(24)
                                                    .typeString(
                                                        "Flutter App Developer"
                                                    )
                                                    .pauseFor(500)
                                                    .deleteChars(21)
                                                    .typeString("Programmer")
                                                    .pauseFor(500)
                                                    .deleteChars(10)
                                                    .start();
                                            }}
                                        />
                                    </h2>
                                    <div className="mt-4">
                                        <a
                                            href=""
                                            target="_blank"
                                            className="btn btn-outline-dark btn-lg"
                                        >
                                            Download Resume
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 order-2 order-lg-1 profile_pic">
                                    <img
                                        src={profile}
                                        alt="profile pic"
                                        className="img-fluid shadow"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Home;
