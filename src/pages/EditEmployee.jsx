import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    phone: "",
    designation: "",
    salary: "",
  });

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = storedEmployees.find((emp) => emp.id === id);

    if (employee) {
      setFormData({
        id: employee.id,
        name: employee.name,
        phone: employee.phone,
        designation: employee.designation,
        salary: employee.salary,
      });
    } else {
      alert("Employee not found");
      navigate("/view-employee");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    const updatedEmployees = storedEmployees.map((emp) =>
      emp.id === id ? { ...emp, ...formData } : emp
    );
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    navigate("/view-employee");
  };

  return (
    <div
      className="card shadow-lg p-5 mx-auto"
      style={{
        maxWidth: "800px",
        borderRadius: "20px",
        backgroundColor: "#1E1E1E",
      }}
    >
      <h3
        className="mb-5 text-center"
        style={{ color: "#BB86FC", fontWeight: "600" }}
      >
        Edit Employee
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {[
            { name: "id", label: "Employee ID", type: "text", readOnly: true },
            { name: "name", label: "Name", type: "text" },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "designation", label: "Designation", type: "text" },
            { name: "salary", label: "Salary", type: "number" },
          ].map((field) => (
            <div className="col-md-6" key={field.name}>
              <label className="form-label text-light">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                readOnly={field.readOnly || false}
                className="form-control"
                style={{
                  backgroundColor: "#2A2A2A",
                  color: "#E0E0E0",
                  border: "1px solid #444",
                  borderRadius: "10px",
                }}
                required={!field.readOnly}
              />
            </div>
          ))}
        </div>

        <div className="mt-5 text-center">
          <button
            className="btn px-5 py-2"
            style={{
              backgroundColor: "#BB86FC",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9B4DFF")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#BB86FC")}
          >
            Update Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
