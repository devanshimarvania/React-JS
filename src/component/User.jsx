import React from "react";
import user1 from "../assets/img/user_1.png";
import user2 from "../assets/img/user_2.png";
import user3 from "../assets/img/user_3.png";
import user4 from "../assets/img/user_4.png";

function User() {
    const users = [
        { id: 1, img: user1, name: "User 1" },
        { id: 2, img: user2, name: "User 2" },
        { id: 3, img: user3, name: "User 3" },
        { id: 4, img: user4, name: "User 4" },
    ];

    return (
        <>
            <section className="bg-dark py-120">
                <div className="container">
                    <div className="row">
                        <h6 className="text-uppercase fw-light mb-2">Users</h6>
                        <h2 className="text-uppercase fw-light mb-5">worldwide users</h2>
                    </div>
                    <div className="row">
                        {users.map((user) => (
                            <div key={user.id} className="col-md-3 text-center">
                                <img
                                    src={user.img}
                                    alt={user.name}
                                    className="img-fluid"
                                    style={{ height: "110px", objectFit: "cover" }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </>

    );
}

export default User;
