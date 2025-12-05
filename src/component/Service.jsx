import React from "react";

// Import images
import service1 from "../assets/img/service_1.png";
import service2 from "../assets/img/service_2.png";
import service3 from "../assets/img/service_3.png";
import service4 from "../assets/img/service_4.png";

function Service() {
    const services = [
        { id: 1, img: service1, title: "Face Makeup", desc: "Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the relationship that exists." },
        { id: 2, img: service2, title: "Eye Makeup", desc: "Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the relationship that exists." },
        { id: 3, img: service3, title: "Hair Makeup", desc: "Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the relationship that exists." },
        { id: 4, img: service4, title: "Bridal Makeup", desc: "Author of Die Vertretung beim Rechtsgeschälft. Agency, in law, the relationship that exists." },
    ];

    return (
        <>
            <section className="py-120 bg-black service">
                <div className="container">
                    <div className="row text-center">
                        <h6 className="text-uppercase fw-light mb-2">What We Do</h6>
                        <h2 className="text-uppercase fw-light mb-5">Makeup Services</h2>
                    </div>
                    <div className="row g-4">
                        {services.map((service) => (
                            <div key={service.id} className="col-md-3">
                                <div className="card h-100 text-center rounded-0">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="card-img-top mx-auto rounded-0"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title text-uppercase fs-4 fw-light mt-4 mb-3">{service.title}</h5>
                                        <p className="card-text text-color mb-4">{service.desc}</p>
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

export default Service;
