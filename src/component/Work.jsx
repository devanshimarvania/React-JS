import React from "react";

// Import Images
import work1 from "../assets/img/work_1.jpg";
import work2 from "../assets/img/work_2.jpg";
import work3 from "../assets/img/work_3.jpg";
import work4 from "../assets/img/work_4.jpg";
import work5 from "../assets/img/work_5.jpg";
import work6 from "../assets/img/work_6.jpg";

function Work() {
    const allImages = [
        { id: 1, img: work1, category: "eye" },
        { id: 2, img: work2, category: "hair" },
        { id: 3, img: work3, category: "bridal" },
        { id: 4, img: work4, category: "party" },
        { id: 5, img: work5, category: "eye" },
        { id: 6, img: work6, category: "hair" },
    ];

    const filterImages = (category) => {
        if (category === "all") return allImages;
        return allImages.filter((img) => img.category === category);
    };

    return (
        <>
            <section className="py-120 bg-dark">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <div className=" mb-4">
                                <h6 className="text-uppercase fw-light mb-2">Read</h6>
                                <h2 className="text-uppercase fw-light mb-0">Latest News</h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <ul className="nav nav-pills justify-content-end gap-2 mb-4" id="myPillTab" role="tablist">

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link active"
                                        id="all-pill"
                                        data-bs-toggle="pill"
                                        data-bs-target="#all"
                                        type="button"
                                        role="tab"
                                    >
                                        All Work
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="eye-pill"
                                        data-bs-toggle="pill"
                                        data-bs-target="#eye"
                                        type="button"
                                        role="tab"
                                    >
                                        Eye Makeup
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="hair-pill"
                                        data-bs-toggle="pill"
                                        data-bs-target="#hair"
                                        type="button"
                                        role="tab"
                                    >
                                        Hair Makeup
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="bridal-pill"
                                        data-bs-toggle="pill"
                                        data-bs-target="#bridal"
                                        type="button"
                                        role="tab"
                                    >
                                        Bridal Makeup
                                    </button>
                                </li>

                                <li className="nav-item" role="presentation">
                                    <button
                                        className="nav-link"
                                        id="party-pill"
                                        data-bs-toggle="pill"
                                        data-bs-target="#party"
                                        type="button"
                                        role="tab"
                                    >
                                        Party Makeup
                                    </button>
                                </li>

                            </ul>
                        </div>
                    </div>

                    {/* TAB CONTENT */}
                    <div className="tab-content mt-4">

                        {/* All Images */}
                        <div className="tab-pane fade show active" id="all" role="tabpanel">
                            <div className="row g-4">
                                {filterImages("all").map((item) => (
                                    <div className="col-md-4" key={item.id}>
                                        <img
                                            src={item.img}
                                            className="img-fluid"
                                            alt="work"
                                            style={{
                                                width: "100%",
                                                height: "280px",
                                                objectFit: "cover",
                                                borderRadius: "0",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Eye Makeup */}
                        <div className="tab-pane fade" id="eye" role="tabpanel">
                            <div className="row g-4">
                                {filterImages("eye").map((item) => (
                                    <div className="col-md-4" key={item.id}>
                                        <img
                                            src={item.img}
                                            className="img-fluid"
                                            alt="work"
                                            style={{
                                                width: "100%",
                                                height: "280px",
                                                objectFit: "cover",
                                                borderRadius: "0",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Hair Style */}
                        <div className="tab-pane fade" id="hair" role="tabpanel">
                            <div className="row g-4">
                                {filterImages("hair").map((item) => (
                                    <div className="col-md-4" key={item.id}>
                                        <img
                                            src={item.img}
                                            className="img-fluid"
                                            alt="work"
                                            style={{
                                                width: "100%",
                                                height: "280px",
                                                objectFit: "cover",
                                                borderRadius: "0",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bridal */}
                        <div className="tab-pane fade" id="bridal" role="tabpanel">
                            <div className="row g-4">
                                {filterImages("bridal").map((item) => (
                                    <div className="col-md-4" key={item.id}>
                                        <img
                                            src={item.img}
                                            className="img-fluid"
                                            alt="work"
                                            style={{
                                                width: "100%",
                                                height: "280px",
                                                objectFit: "cover",
                                                borderRadius: "0",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Party Makeup */}
                        <div className="tab-pane fade" id="party" role="tabpanel">
                            <div className="row g-4">
                                {filterImages("party").map((item) => (
                                    <div className="col-md-4" key={item.id}>
                                        <img
                                            src={item.img}
                                            className="img-fluid"
                                            alt="work"
                                            style={{
                                                width: "100%",
                                                height: "280px",
                                                objectFit: "cover",
                                                borderRadius: "0",
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Work;
