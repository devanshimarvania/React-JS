import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="py-120 bg-black">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <a className="navbar-brand" href="#"><img src="./src/assets/img/logo.png" alt="" className="img-fluid logo" /></a>
                            <div>
                                <p className="mt-4 fw-medium">Nam purus nibh, luctus at cursus vel, efficitur eu dui. Aenean tellus massa, euismod eu dictum in, tincidunt ac lacus. Quisque vitae tellus a nibh sollicitudin viverra id sed libero.</p>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footerLine position-relative">
                                <h2 className="text-uppercase fw-light mb-4 fs-5">Our Links</h2>
                            </div>
                            <div className="footerlinks mt-5">
                                <ul>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">Home</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">About Us</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">Services</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footerLine position-relative">
                                <h2 className="text-uppercase fw-light mb-4 fs-5">Our Services</h2>
                            </div>
                            <div className="footerlinks mt-5">
                                <ul>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">FAQ</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">Support</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">Privercy</a>
                                    </li>
                                    <li className="mb-3">
                                        <a href="#" className="fw-medium">Term & Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="footerLine position-relative">
                                <h2 className="text-uppercase fw-light mb-4 fs-5">Our Services</h2>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <div className="footerIcon mt-4">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="mt-4">
                                        <p className="fw-medium mb-0">1800-121-3637</p>
                                        <p className="fw-medium">+91-7052-101-786</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <div className="footerIcon mt-1">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="mt-1">
                                        <p className="fw-medium mb-0">info@example.com</p>
                                        <p className="fw-medium">help@example.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <div className="footerIcon mt-1">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="mt-1">
                                        <p className="fw-medium mb-0">1247/Plot No.39, LHB Colony,Kanpur</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-md-3">
                            <div className="footerLines position-relative">
                                <h2 className="text-uppercase fw-light mb-4 fs-5">Subscribe To Our Newsletter</h2>
                            </div>
                            <div style={{ marginTop: "50px" }} >
                                <iframe
                                    title="google-map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.0066278690057!2d85.3201849750492!3d27.707857076189363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1903ce85697b%3A0x5f7235a05d6bbf4c!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="50%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                        </div>
                    </div>
                </div>
            </footer >
            <div className="py-2 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div>
                                <p className="fw-medium mb-0">Copyright © 2021 Zcubedesign. All rights reserved.</p>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="text-end term position-relative">
                                <p className="fw-medium mb-0">Privercy <span className="ms-5">Term & Conditions</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}