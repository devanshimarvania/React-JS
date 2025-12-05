import React from "react";

// Import Images
import news1 from "../assets/img/news_1.jpg";
import news2 from "../assets/img/news_2.jpg";
import news3 from "../assets/img/news_3.jpg";

function News() {
    const newsData = [
        {
            id: 11,
            img: news1,
            title: "Fusce suscipit arcu velit id scelerisque tempus est",
            desc: "Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.",
            date: "05 Dec 2025",
        },
        {
            id: 12,
            img: news2,
            title: "Fusce suscipit arcu velit id scelerisque tempus est",
            desc: "Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.",
            date: "04 Dec 2025",
        },
        {
            id: 13,
            img: news3,
            title: "Fusce suscipit arcu velit id scelerisque tempus est",
            desc: "Cras ultrices maximus arcu ut aqam. Aliquam daber a diam ante.",
            date: "03 Dec 2025",
        },
    ];

    return (
        <>
            <section className="py-120 bg-black news">
                <div className="container">
                    <div className="row text-center">
                        <h6 className="text-uppercase fw-light mb-2">Read</h6>
                        <h2 className="text-uppercase fw-light mb-5">Latest News</h2>
                    </div>
                    <div className="row g-4">
                        {newsData.map((item) => (
                            <div key={item.id} className="col-md-4">
                                <div className="card h-100 rounded-0">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="card-img-top mx-auto rounded-0"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <div>
                                            <p className=" my-3 ps-3 text-color" style={{ fontSize: "14px" }}>
                                            <i className="bi bi-person-circle me-1 primary-text"></i> Admin
                                            <span className="mx-2">|</span>
                                            <i className="bi bi-calendar-event me-1 primary-text"></i> {item.date}
                                        </p>
                                        </div>
                                        <h5 className="px-3 mb-3">
                                            <a
                                            href="#"
                                            className="card-title mb-2 text-decoration-none fs-4 text-uppercase"
                                        >
                                            {item.title}
                                        </a>
                                        </h5>
                                        
                                        <p className="card-text text-color mb-4 px-3">{item.desc}</p>

                                        <div className="p-3 pt-0 newsBtn">
                                            <a href="#" className="text-decoration-none ">
                                                <i className="bi bi-chevron-right me-1"></i>
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>


    );
}

export default News;