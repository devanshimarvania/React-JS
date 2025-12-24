import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    status: "Active",
    salary: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.id ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.department ||
      !formData.designation ||
      !formData.salary
    ) {
      alert("Please fill all required fields");
      return;
    }
    const existingEmployees =
      JSON.parse(localStorage.getItem("employees")) || [];
    existingEmployees.push(formData);
    localStorage.setItem("employees", JSON.stringify(existingEmployees));
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
        className="mb-4 text-center"
        style={{ color: "#BB86FC", fontWeight: "600" }}
      >
        Add New Employee
      </h3>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          {[
            { name: "id", label: "Employee ID", type: "text" },
            { name: "name", label: "Name", type: "text" },
            { name: "email", label: "Email", type: "email" },
            { name: "phone", label: "Phone", type: "tel" },
            { name: "department", label: "Department", type: "text" },
            { name: "designation", label: "Designation", type: "text" },
            { name: "salary", label: "Salary", type: "number" },
          ].map((field) => (
            <div className="col-md-6" key={field.name}>
              <label className="form-label text-light">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                className="form-control"
                value={formData[field.name]}
                onChange={handleChange}
                style={{
                  backgroundColor: "#2A2A2A",
                  color: "#E0E0E0",
                  border: "1px solid #444",
                  borderRadius: "10px",
                }}
                required
              />
            </div>
          ))}

          <div className="col-md-6">
            <label className="form-label text-light">Status</label>
            <select
              name="status"
              className="form-select"
              value={formData.status}
              onChange={handleChange}
              style={{
                backgroundColor: "#2A2A2A",
                color: "#E0E0E0",
                border: "1px solid #444",
                borderRadius: "10px",
              }}
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>

          <div className="col-md-12">
            <label className="form-label text-light">Employee Image</label>
            <input
              type="file"
              name="image"
              className="form-control"
              accept="image/*"
              onChange={handleChange}
              style={{
                backgroundColor: "#2A2A2A",
                color: "#E0E0E0",
                border: "1px solid #444",
                borderRadius: "10px",
              }}
            />
          </div>
        </div>

        <div className="mt-5 text-center">
          <button
            className="btn btn-primary px-5 py-2"
            style={{
              backgroundColor: "#BB86FC",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#9B4DFF";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#BB86FC";
            }}
          >
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
