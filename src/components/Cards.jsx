import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cards = (props) => {
    return (
        <>
            <div className="card text-center h-100 shadow">
                <LazyLoadImage
                    placeholderSrc={props.hold}
                    height={props.height}
                    src={props.imgsrc}
                    width={props.width}
                    effect="blur"
                    className="card-img-top"
                />
                <div className="card-body text-dark">
                    <h6 className="card-title greenText fw-bold">
                        {props.title}
                    </h6>
                    <p className="card-text text-secondary">{props.text}</p>
                    <a
                        href={props.link}
                        target="_blank"
                        className="btn btn-outline-dark stretched-link"
                    >
                        Check Out
                    </a>
                </div>
            </div>
        </>
    );
};

export default Cards;
