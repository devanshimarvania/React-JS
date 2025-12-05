import React from "react";

export default function AboutMe() {
    return (
        <>
            <section className="py-120 bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="aboutMe position-relative">
                                <div className="about-text position-absolute">
                                    <p className="text-white fw-light my-0">30+
                                        <br/>
                                        <span className="my-0">Years Experience</span>
                                    </p>
                                </div>
                                <img src="./src/assets/img/aboutMe.png" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="ps-3">
                                <h6 className="text-uppercase fw-light mb-2">About Me</h6>
                                <h2 className="text-uppercase fw-light mb-4">Your Beauty and <br />Success Starts Here</h2>
                                <p className="mb-3">Hello, I'm Olivia a Professional Makeup Artist. Quisque luctus tincidunt enim dapibus pharetra neue ultricies at. Morbi dapibus mauris id scelerisque placerat nula massa lacinia orci in facilisis nulla quam volutpat lectus. Nunc elementum ante commodo felis hendrerit.</p>
                                <p><i className="bi bi-check2-circle color fw-medium me-2 "></i>
                                    Fringilla risus nec, luctus mauris orci auctor purus euismod at pretium purus pretium ligula rutrum tempor sapien.
                                </p>
                                <p><i className="bi bi-check2-circle color fw-medium me-2 "></i>
                                    Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium purus .
                                </p>
                                <a href="#" className="btn btn-primary text-uppercase rounded-pill py-3 px-4 fw-normal" type="submit">Learn More
                                    <i className="bi bi-arrow-right ms-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}