import React from "react";

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <>
            <footer>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-xs-12 text-center text-lg-start mb-3 mb-lg-0"><p className="copyright_text">Copyright &copy; {date} All Rights Reserved</p></div>
                        <div className="col-md-6 col-xs-12 text-center text-lg-end">
                            <ul className="social-icons">
                                <li>
                                    <a href="https://www.facebook.com/amit.ramani.750" className="social-icon">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/aamit_kun/" className="social-icon">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/amit-ramani-798978204/" className="social-icon">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/Ichigo27" className="social-icon">
                                        <i className="fa fa-github"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
