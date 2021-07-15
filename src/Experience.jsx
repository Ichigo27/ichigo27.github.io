import { motion } from "framer-motion";
import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Helmet } from "react-helmet";
import "react-vertical-timeline-component/style.min.css";
import { pageTransition, pageVariants } from "./transition";

const Experience = () => {
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
				<title>Experience</title>
			</Helmet>
			<section className="header">
				<div className="container mb-5">
					<h1 className="display-3 about_header text-center mb-4">
						Internships
					</h1>
					<div>
						<VerticalTimeline layout="1-column-left">
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								date="2019 - 2020"
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
										Google Earth Pro
									</button>
									<button
										type="button"
										class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
									>
										AutoCAD
									</button>
								</div>
								<h3 className="vertical-timeline-element-title greenText">
									Intern at International Association for
									Human Values (IAHV), Mumbai
								</h3>
								<p>
									<ul>
										<li>
											Analyzed various water bodies in
											different districts of Maharashtra
											usingGoogle Earth Pro.
										</li>
										<li>
											Traced all runnel, streams, rivers,
											and other water bodies using
											AutoCAD.
										</li>
									</ul>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								date="2020 - 2021"
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
										Flutter
									</button>
									<button
										type="button"
										class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
									>
										Firebase
									</button>
									<button
										type="button"
										class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
									>
										Dart
									</button>
								</div>
								<h3 className="vertical-timeline-element-title greenText">
									Intern at International Association for
									Human Values (IAHV), Mumbai
								</h3>

								<p>
									<ul>
										<li>
											Developed a Flutter application for
											the company for management and
											supervision.
										</li>
										<li>
											Connected Firebase Authentication
											for email and OTP-based login
											system.
										</li>
										<li>
											Used Cloud Firestore and Realtime
											Database for this application.
										</li>
									</ul>
								</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								date="2020 - present"
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
										Django
									</button>
									<button
										type="button"
										class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
									>
										Bootstrap
									</button>
									<button
										type="button"
										class="btn btn-outline-secondary rounded-pill disabled btn-sm mb-2 ms-2"
									>
										MySQL
									</button>
								</div>
								<h3 className="vertical-timeline-element-title greenText">
									Intern at Creative Finserve, Mumbai
								</h3>

								<p>
									<ul>
										<li>
											Volunteer for a leadership role in a
											team of 5 for developing a
											finance-based website.
										</li>
										<li>
											Worked with Django and Bootstrap
											frameworks and used MySQL as a
											backend for the website.
										</li>
										<li>
											Applied SEO for improving our
											website ranking in search results.
										</li>
									</ul>
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
