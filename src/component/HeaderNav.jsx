import React from "react";

export default function HeaderNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-black py-4">
        <div className="container">
          <a className="navbar-brand" href="#"><img src="./src/assets/img/logo.png" alt="" className="img-fluid logo" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto head-text">
              <li className="nav-item">
                <a className="nav-link active text-white text-uppercase mx-3" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-3" href="#">About me</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-3" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-3" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-3" href="#">News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white text-uppercase mx-3" href="#">Contact</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-primary text-uppercase rounded-pill py-3 px-4 fw-normal" type="submit">Get A Quote
                <i className="bi bi-arrow-right ms-3"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>

  );
}
