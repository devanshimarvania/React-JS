import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addStudent } from '../redux/actions/studentActions';

const DEGREES = [
  'B.Tech Computer Science',
  'B.Tech Information Technology',
  'B.Tech Electronics',
  'B.Tech Mechanical',
  'B.Tech Civil',
  'BCA',
  'BBA',
  'B.Com',
  'B.Sc Physics',
  'B.Sc Chemistry',
  'B.Sc Mathematics',
  'MBA',
  'MCA',
  'M.Tech Computer Science',
  'M.Tech Electronics',
];

const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year'];

const StudentForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    degree: 'B.Tech Computer Science',
    year: '1st Year',
    email: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = {
    name: formData.name.trim().length >= 2,
    rollNumber: formData.rollNumber.trim().length > 0,
    email: formData.email.includes('@'),
  };

  const formIsValid = Object.values(isValid).every(Boolean);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!formIsValid) return;

    dispatch(addStudent({ ...formData }));
    setSuccess(true);

    setTimeout(() => navigate('/'), 1500);
  };

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">

          <div className="card shadow border-0">
            <div className="card-header bg-primary text-white py-3">
              <h4 className="mb-0 fw-bold">➕ Add New Student</h4>
              <p className="mb-0 small opacity-75">
                Fill in all fields to enroll a student
              </p>
            </div>

            <div className="card-body p-4">

              {success && (
                <div className="alert alert-success">
                  ✅ Student added successfully! Redirecting...
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${submitted && !isValid.name ? 'is-invalid' : ''}`}
                    placeholder="e.g. Aarav Sharma"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Name must be at least 2 characters.
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Roll Number *
                  </label>
                  <input
                    type="text"
                    name="rollNumber"
                    className={`form-control ${submitted && !isValid.rollNumber ? 'is-invalid' : ''}`}
                    placeholder="e.g. CS2024001"
                    value={formData.rollNumber}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Roll number is required.
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Degree Program *
                  </label>
                  <select
                    name="degree"
                    className="form-select"
                    value={formData.degree}
                    onChange={handleChange}
                  >
                    {DEGREES.map((deg) => (
                      <option key={deg} value={deg}>
                        {deg}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Year *
                  </label>
                  <select
                    name="year"
                    className="form-select"
                    value={formData.year}
                    onChange={handleChange}
                  >
                    {YEARS.map((yr) => (
                      <option key={yr} value={yr}>
                        {yr}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${submitted && !isValid.email ? 'is-invalid' : ''}`}
                    placeholder="e.g. student@college.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email.
                  </div>
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary flex-grow-1"
                  >
                    ✅ Add Student
                  </button>

                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={() => navigate('/')}
                  >
                    Cancel
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default StudentForm;