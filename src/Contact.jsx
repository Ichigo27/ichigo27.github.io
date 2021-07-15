import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useAlert } from "react-alert";
import { Helmet } from "react-helmet";
import { pageTransition, pageVariants } from "./transition";

const Contact = () => {
    const [data, setData] = useState({
        fname: "",
        number: "",
        email: "",
        message: "",
    });

    const alert = useAlert();

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const newMsg = {
            fname: data.fname,
            number: data.number,
            email: data.email,
            message: data.message,
        };
        alert.show("Please Wait");
        axios
            .post("https://ichigo27-messages.herokuapp.com/message", newMsg)
            .then(() => {
                alert.success("Message Sent");
            })
            .catch((err) => {
                console.log(err);
                alert.error("Network Error");
            });
    };

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
				<title>Contact</title>
			</Helmet>
            <section className="header">
                <div className="container">
                    <h1 className="display-3 about_header mt-2 mb-4 text-center">
                        Contact Me
                    </h1>
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="fname"
                                        name="fname"
                                        value={data.fname}
                                        onChange={InputEvent}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Mobile
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="number"
                                        name="number"
                                        value={data.number}
                                        onChange={InputEvent}
                                        required
                                        placeholder="Enter your number"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        required
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        name="message"
                                        placeholder="Type your message"
                                        value={data.message}
                                        onChange={InputEvent}
                                        required
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-outline-dark btn-lg"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
};

export default Contact;
