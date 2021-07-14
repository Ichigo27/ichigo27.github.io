import { motion } from "framer-motion";
import React from "react";
import { Helmet } from "react-helmet";
import Cards from "./components/Cards";
import profile from "./images/profile_pic2.png";
import { pageTransition, pageVariants } from "./transition";

const Projects = () => {
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
				<title>Projects</title>
			</Helmet>
			<section className="header">
				<div className="container">
					<h1 className="display-3 about_header mt-2 text-center">
						My Projects
					</h1>
					<div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-5 justify-content-center">
						<div class="col">
							<Cards
								imgsrc="https://cdn.pixabay.com/photo/2016/08/20/06/44/e-commerce-1606962_960_720.png"
								hold={profile}
								title="Voice-Based Library Management System (AlphaByte)"
								text="Designed a library management system (AlphaByte) with the voice-based search of books and automatic categorization of books in genres based on the title which offers a website for admin and a mobile application for users."
								link="#"
								height="150"
								width="300"
							/>
						</div>
						<div class="col">
							<Cards
								imgsrc="https://cdn.pixabay.com/photo/2016/11/13/04/52/statistic-1820320_960_720.png"
								hold={profile}
								title="Deep Learning based Camouflage Object Detection"
								text="Solving the problem of camouflage object detection which uses deep learning based binary segmentation model.It was implemented using UNet architecture with ResNet34 as Backbone using PyTorch and FastAI on Google Colab."
								link="#"
								height="150"
								width="300"
							/>
						</div>
						{/* <div class="col">
                            <Cards
                                imgsrc="https://picsum.photos/400/200"
                                hold={profile}
                                title="A"
                                text="lorem"
                                link="#"
                            />
                        </div>
                        <div class="col">
                            <Cards
                                imgsrc="https://picsum.photos/400/200"
                                hold={profile}
                                title="A"
                                text="lorem"
                                link="#"
                            />
                        </div> */}
					</div>
				</div>
			</section>
		</motion.div>
	);
};

export default Projects;
