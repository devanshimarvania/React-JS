import React from "react";

export default function Newsletter() {
    return (
        <>
            <section className="py-120 primary-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h3 className="text-uppercase fw-light mb-0">Get Update By Signup Our Newsletter</h3>
                        </div>
                        <div className="col-md-4">
                            <div className="input-group newslater">
                                <input type="email" className="form-control" placeholder="Enter Your Email" aria-label="Recipient’s username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary text-uppercase" type="button" id="button-addon2">Join now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}