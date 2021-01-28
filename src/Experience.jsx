import { motion } from "framer-motion";
import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {pageTransition, pageVariants} from "./transition"

const Experience = () => {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        >
            <section className="header">
                <div className="container mb-5">
                    <h1 className="display-3 about_header text-center mb-4">
                        Internships
                    </h1>
                    <div>
                        <VerticalTimeline layout="1-column-left">
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                contentStyle={{
                                    color: " #222831",
                                    background: "#fff",
                                }}
                                iconStyle={{
                                    background: " #222831",
                                    color: "#fff",
                                }}
                            >
                                <div className="d-flex flex-wrap">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Success
                                    </button>
                                </div>
                                <h3 className="vertical-timeline-element-title greenText">
                                    Creative Director
                                </h3>

                                <p>
                                    Creative Direction, User Experience, Visual
                                    Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                contentStyle={{
                                    color: " #222831",
                                    background: "#fff",
                                }}
                                iconStyle={{
                                    background: " #222831",
                                    color: "#fff",
                                }}
                            >
                                <div className="d-flex flex-wrap">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Success
                                    </button>
                                </div>
                                <h3 className="vertical-timeline-element-title greenText">
                                    Creative Director
                                </h3>

                                <p>
                                    Creative Direction, User Experience, Visual
                                    Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                contentStyle={{
                                    color: " #222831",
                                    background: "#fff",
                                }}
                                iconStyle={{
                                    background: " #222831",
                                    color: "#fff",
                                }}
                            >
                                <div className="d-flex flex-wrap">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Success
                                    </button>
                                </div>
                                <h3 className="vertical-timeline-element-title greenText">
                                    Creative Director
                                </h3>

                                <p>
                                    Creative Direction, User Experience, Visual
                                    Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                contentStyle={{
                                    color: " #222831",
                                    background: "#fff",
                                }}
                                iconStyle={{
                                    background: " #222831",
                                    color: "#fff",
                                }}
                            >
                                <div className="d-flex flex-wrap">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Success
                                    </button>
                                </div>
                                <h3 className="vertical-timeline-element-title greenText">
                                    Creative Director
                                </h3>

                                <p>
                                    Creative Direction, User Experience, Visual
                                    Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                contentStyle={{
                                    color: " #222831",
                                    background: "#fff",
                                }}
                                iconStyle={{
                                    background: " #222831",
                                    color: "#fff",
                                }}
                            >
                                <div className="d-flex flex-wrap">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Success
                                    </button>
                                </div>
                                <h3 className="vertical-timeline-element-title greenText">
                                    Creative Director
                                </h3>

                                <p>
                                    Creative Direction, User Experience, Visual
                                    Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                contentStyle={{
                                    color: " #222831",
                                    background: "#fff",
                                }}
                                iconStyle={{
                                    background: " #222831",
                                    color: "#fff",
                                }}
                            >
                                <div className="d-flex flex-wrap">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Success
                                    </button>
                                </div>
                                <h3 className="vertical-timeline-element-title greenText">
                                    Creative Director
                                </h3>

                                <p>
                                    Creative Direction, User Experience, Visual
                                    Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2011 - present"
                                contentStyle={{
                                    color: " #222831",
                                    background: "#fff",
                                }}
                                iconStyle={{
                                    background: " #222831",
                                    color: "#fff",
                                }}
                            >
                                <div className="d-flex flex-wrap">
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
                                    >
                                        Success
                                    </button>
                                </div>
                                <h3 className="vertical-timeline-element-title greenText">
                                    Creative Director
                                </h3>

                                <p>
                                    Creative Direction, User Experience, Visual
                                    Design, Project Management, Team Leading
                                </p>
                            </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Experience;
