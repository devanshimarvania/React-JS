import React, { useEffect, useState } from "react";

const Home = () => {
  const [employees, setEmployees] = useState([]);

  // Load employees from localStorage
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  return (
    <div>
      <h2 className="mb-4 text-center text-dark">Employee Dashboard</h2>

      {employees.length === 0 ? (
        <p className="text-center text-muted">No employees found.</p>
      ) : (
        <div className="row g-4">
          {employees.map((emp) => (
            <div className="col-md-4" key={emp.id}>
              <div
                className="card h-100 text-center shadow-lg border-0"
                style={{
                  background: "linear-gradient(145deg, #1E1E1E, #272727)",
                  borderRadius: "15px",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 12px 20px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.3)";
                }}
              >
                {emp.image ? (
                  <img
                    src={emp.image}
                    className="card-img-top rounded-circle mx-auto mt-3"
                    alt={emp.name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      border: "4px solid #BB86FC",
                    }}
                  />
                ) : (
                  <div
                    className="rounded-circle mx-auto mt-3"
                    style={{
                      width: "120px",
                      height: "120px",
                      backgroundColor: "#555",
                      border: "4px solid #BB86FC",
                    }}
                  />
                )}

                <div className="card-body">
                  <h5 className="card-title text-white">{emp.name}</h5>
                  <p className="card-text mb-1 text-secondary">
                    <strong>Department:</strong> {emp.department}
                  </p>
                  <p className="card-text mb-2 text-secondary">
                    <strong>Designation:</strong> {emp.designation}
                  </p>
                  <span
                    className={`badge ${
                      emp.status === "Active" ? "bg-success" : "bg-secondary"
                    } py-2 px-3`}
                    style={{ fontSize: "0.9rem", borderRadius: "12px" }}
                  >
                    {emp.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
