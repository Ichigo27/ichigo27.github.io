import React from "react";
import html from "./icons/html.svg";
import css from "./icons/css.svg";
import js from "./icons/js.svg";
import c from "./icons/c.svg";
import java from "./icons/java.svg";
import python from "./icons/python.svg";
import php from "./icons/php.svg";
import sql from "./icons/sql.svg";
import jquery from "./icons/jquery.svg";
import git from "./icons/git.svg";
import github from "./icons/github.svg";
import vscode from "./icons/vscode.svg";
import flutter from "./icons/flutter.svg";
import firebase from "./icons/firebase.svg";
import mongodb from "./icons/mongodb.svg";
import react from "./icons/react.svg";
import node from "./icons/node.svg";
import ubuntu from "./icons/ubuntu.svg";
import bootstrap from "./icons/bootstrap.svg";
import photoshop from "./icons/photoshop.svg";
import premiere from "./icons/premiere.svg";
import windows from "./icons/windows.svg";
import xampp from "./icons/xampp.svg";
import studio from "./icons/studio.svg";
import { motion } from "framer-motion";
import {pageTransition, pageVariants} from "./transition"

const Skills = () => {
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
                    <h1 className="display-3 about_header mt-2 mb-4 text-center">
                        Technologies Used
                    </h1>
                    <div className="row row-cols-3 row-cols-sm-4 row-cols-md-5 row-cols-lg-6 g-3 g-md-4 g-lg-5 text-center pb-4">
                        <div className="k-hover">
                            <img
                                src={html}
                                alt="html"
                                title="HTML"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={css}
                                alt="css"
                                title="css"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={js}
                                alt="js"
                                title="js"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={jquery}
                                alt="jquery"
                                title="jquery"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={xampp}
                                alt="xampp"
                                title="xampp"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={bootstrap}
                                alt="bootstrap"
                                title="bootstrap"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={c}
                                alt="c"
                                title="c"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={java}
                                alt="java"
                                title="java"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={python}
                                alt="python"
                                title="python"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={git}
                                alt="git"
                                title="git"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={github}
                                alt="github"
                                title="github"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={vscode}
                                alt="vscode"
                                title="vscode"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={sql}
                                alt="sql"
                                title="sql"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={php}
                                alt="php"
                                title="php"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={ubuntu}
                                alt="ubuntu"
                                title="ubuntu"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={windows}
                                alt="windows"
                                title="windows"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={react}
                                alt="react"
                                title="react"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={node}
                                alt="node"
                                title="node"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={mongodb}
                                alt="mongodb"
                                title="mongodb"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={flutter}
                                alt="flutter"
                                title="flutter"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={firebase}
                                alt="firebase"
                                title="firebase"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={studio}
                                alt="studio"
                                title="studio"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={photoshop}
                                alt="photoshop"
                                title="photoshop"
                                className="skill_icon"
                            />
                        </div>
                        <div className="k-hover">
                            <img
                                src={premiere}
                                alt="premiere"
                                title="premiere"
                                className="skill_icon"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Skills;
