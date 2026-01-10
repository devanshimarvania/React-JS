import React, { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";

const ViewEmployee = () => {
    const navigate = useNavigate();

    const [employees, setEmployees] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    const [sortOption, setSortOption] = useState("");

    const [statusFilter, setStatusFilter] = useState("all");

    useEffect(() => {
        const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
        setEmployees(storedEmployees);
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            const updatedEmployees = employees.filter((emp) => emp.id !== id);
            setEmployees(updatedEmployees);
            localStorage.setItem("employees", JSON.stringify(updatedEmployees));
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    const filteredEmployees = useMemo(() => {
        let data = [...employees];

        if (searchTerm.trim() !== "") {
            data = data.filter(emp =>
                emp.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (statusFilter !== "all") {
            data = data.filter(emp => emp.status.toLowerCase() === statusFilter);
        }

        switch (sortOption) {
            case "name-asc":
                data.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "name-desc":
                data.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case "salary-asc":
                data.sort((a, b) => Number(a.salary) - Number(b.salary));
                break;
            case "salary-desc":
                data.sort((a, b) => Number(b.salary) - Number(a.salary));
                break;
            default:
                break;
        }

        return data;
    }, [employees, searchTerm, sortOption, statusFilter]);

    return (
        <div>
            <h2 className="mb-4 text-center text-dark">View Employees</h2>

            <div className="row mb-4 g-3">
                {/* Search */}
                <div className="col-md-4">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* Filter */}
                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="all">All Employees</option>
                        <option value="active">Only Active</option>
                        <option value="inactive">Only Inactive</option>
                    </select>
                </div>

                {/* Sort */}
                <div className="col-md-4">
                    <select
                        className="form-select"
                        value={sortOption}
                        onChange={(e) => setSortOption(e.target.value)}
                    >
                        <option value="">Sort By</option>
                        <option value="name-asc">Name A → Z</option>
                        <option value="name-desc">Name Z → A</option>
                        <option value="salary-asc">Salary Low → High</option>
                        <option value="salary-desc">Salary High → Low</option>
                    </select>
                </div>
            </div>

            {filteredEmployees.length === 0 ? (
                <p className="text-center text-muted">No employees found.</p>
            ) : (
                <div className="table-responsive">
                    <table
                        className="table align-middle text-light"
                        style={{ borderCollapse: "separate", borderSpacing: "0 10px" }}
                    >
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
                            {filteredEmployees.map((emp) => (
                                <tr
                                    key={emp.id}
                                    style={{
                                        backgroundColor: "#1E1E1E",
                                        borderRadius: "12px",
                                        transition: "0.3s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#272727")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#1E1E1E")
                                    }
                                >
                                    <td>{emp.id}</td>
                                    <td>
                                        {emp.image ? (
                                            <img
                                                src={emp.image}
                                                alt={emp.name}
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    objectFit: "cover",
                                                    borderRadius: "8px",
                                                    border: "2px solid #BB86FC",
                                                }}
                                            />
                                        ) : (
                                            <div
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    borderRadius: "8px",
                                                    backgroundColor: "#555",
                                                }}
                                            />
                                        )}
                                    </td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.department}</td>
                                    <td>{emp.designation}</td>
                                    <td>
                                        <span
                                            className={`badge ${
                                                emp.status === "Active"
                                                    ? "bg-success"
                                                    : "bg-secondary"
                                            } py-2 px-3`}
                                            style={{ borderRadius: "12px" }}
                                        >
                                            {emp.status}
                                        </span>
                                    </td>
                                    <td>Rs. {emp.salary} /-</td>
                                    <td>
                                        <button
                                            className="btn btn-sm btn-warning me-2"
                                            onClick={() => handleEdit(emp.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
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

