import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useAlert } from "react-alert";
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
        // alert(
        //     `Name: ${data.fname} \nNumber: ${data.number} \nEmail: ${data.email} \nMessage: ${data.message} \n`
        // );
        const newMsg = {
            fname: data.fname,
            number: data.number,
            email: data.email,
            message: data.message,
        };
        
        axios
            .post("http://localhost:3001/message", newMsg)
            .then(() => {
                alert.success("Message Sent");
            })
            .catch((err) => {
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
            <section className="header">
                <div className="container">
                    <h1 className="display-3 about_header mt-2 mb-4 text-center">
                        Contact Me
                    </h1>
                    <div className="row">
                        <div className="col-md-6 col-10 mx-auto">
                            <form onSubmit={formSubmit}>
                                <div class="mb-3">
                                    <label for="" class="form-label">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="fname"
                                        name="fname"
                                        value={data.fname}
                                        onChange={InputEvent}
                                        required
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">
                                        Mobile
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="number"
                                        name="number"
                                        value={data.number}
                                        onChange={InputEvent}
                                        required
                                        placeholder="Enter your number"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        class="form-control"
                                        id="email"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        required
                                        placeholder="name@example.com"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="" class="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="message"
                                        name="message"
                                        placeholder="Type your message"
                                        value={data.message}
                                        onChange={InputEvent}
                                        required
                                        rows="4"
                                    ></textarea>
                                </div>
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="btn btn-outline-dark btn-lg"
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
