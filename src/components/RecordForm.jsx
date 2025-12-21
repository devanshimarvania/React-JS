// src/components/RecordForm.jsx
import React, { useState, useEffect } from "react";

const RecordForm = ({ addRecord, editRecord, recordToEdit, cancelEdit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rollNo: "",
    course: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (recordToEdit) {
      setFormData(recordToEdit);
    } else {
      setFormData({ name: "", email: "", rollNo: "", course: "", dob: "" });
    }
  }, [recordToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.rollNo.trim()) newErrors.rollNo = "Roll Number is required";
    if (!formData.course.trim()) newErrors.course = "Course is required";
    if (!formData.dob.trim()) newErrors.dob = "Date of Birth is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (recordToEdit) {
      editRecord(formData);
    } else {
      addRecord(formData);
    }

    setFormData({ name: "", email: "", rollNo: "", course: "", dob: "" });
  };

  return (
    <div className="card p-4 mb-4 shadow-sm">
      <h4>{recordToEdit ? "Edit Record" : "Add Record"}</h4>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        {/* Roll Number */}
        <div className="mb-3">
          <label className="form-label">Roll No</label>
          <input
            type="text"
            className={`form-control ${errors.rollNo ? "is-invalid" : ""}`}
            name="rollNo"
            value={formData.rollNo}
            onChange={handleChange}
          />
          {errors.rollNo && <div className="invalid-feedback">{errors.rollNo}</div>}
        </div>

        {/* Course */}
        <div className="mb-3">
          <label className="form-label">Course</label>
          <input
            type="text"
            className={`form-control ${errors.course ? "is-invalid" : ""}`}
            name="course"
            value={formData.course}
            onChange={handleChange}
          />
          {errors.course && <div className="invalid-feedback">{errors.course}</div>}
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input
            type="date"
            className={`form-control ${errors.dob ? "is-invalid" : ""}`}
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
          {errors.dob && <div className="invalid-feedback">{errors.dob}</div>}
        </div>

        {/* Buttons */}
        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary">
            {recordToEdit ? "Update" : "Add"}
          </button>
          {recordToEdit && (
            <button type="button" className="btn btn-secondary" onClick={cancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecordForm;
