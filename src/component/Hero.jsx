import React from "react";

export default function Hero() {
    return (
        <>
            <section className="py-120 hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <h4 className="text-uppercase fw-light mb-3">Makeup Artist</h4>
                            <h1 className="text-uppercase fw-light mb-5">Welcome to Gmaaeup
                                <br />
                                Beauty salony</h1>
                            <button className="btn btn-secondary text-uppercase rounded-pill py-3 px-4 fw-normal" type="submit">Learn More
                                <i className="bi bi-arrow-right ms-3"></i>
                            </button>
                            <button className="btn btn-primary text-uppercase rounded-pill py-3 px-4 fw-normal ms-3 fs-4" type="submit"> 
                                <i className="bi bi-caret-right-fill"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}