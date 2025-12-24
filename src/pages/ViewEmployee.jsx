import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ViewEmployee = () => {
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);

    // Load employees from localStorage
    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(storedEmployees);
    }, []);

    // Delete employee
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            const updatedEmployees = employees.filter((emp) => emp.id !== id);
            setEmployees(updatedEmployees);
            localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        }
    };

    // Navigate to Edit page
    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    return (
        <div>
            <h2 className="mb-4 text-center text-dark">View Employees</h2>

            {employees.length === 0 ? (
                <p className="text-center text-muted">No employees found.</p>
            ) : (
                <div className="table-responsive">
                    <table className="table align-middle text-light" style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}>
                        <thead>
                            <tr style={{ color: "#BB86FC" }}>
                                <th>ID</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Department</th>
                                <th>Designation</th>
                                <th>Status</th>
                                <th>Salary</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((emp) => (
                                <tr
                                    key={emp.id}
                                    style={{
                                        backgroundColor: "#1E1E1E",
                                        borderRadius: "12px",
                                        marginBottom: "10px",
                                        transition: "0.3s",
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#272727"}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#1E1E1E"}
                                >
                                    <td>{emp.id}</td>
                                    <td>
                                        {emp.image ? (
                                            <img
                                                src={emp.image}
                                                alt={emp.name}
                                                style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "8px", border: "2px solid #BB86FC" }}
                                            />
                                        ) : (
                                            <div
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#555",
                                                }}
                                            ></div>
                                        )}
                                    </td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.department}</td>
                                    <td>{emp.designation}</td>
                                    <td>
                                        <span
                                            className={`badge ${emp.status === "Active" ? "bg-success" : "bg-secondary"} py-2 px-3`}
                                            style={{ fontSize: "0.85rem", borderRadius: "12px" }}
                                        >
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td>Rs. {emp.salary} /-</td>
                                    
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(emp.id)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger"
                                            onClick={() => handleDelete(emp.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ViewEmployee;
