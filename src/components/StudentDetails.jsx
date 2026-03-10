import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateStudent, deleteStudent } from '../redux/actions/studentActions';

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

const yearBadgeColor = {
  '1st Year': 'bg-success',
  '2nd Year': 'bg-primary',
  '3rd Year': 'bg-warning text-dark',
  '4th Year': 'bg-danger',
};

const StudentDetails = ({ student }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: student.name,
    rollNumber: student.rollNumber,
    degree: student.degree || student.class || 'B.Tech Computer Science',
    year: student.year || '1st Year',
    email: student.email,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = () => {
    dispatch(updateStudent(student.id, { ...formData, id: student.id }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm(`Delete ${student.name}? This cannot be undone.`)) {
      dispatch(deleteStudent(student.id));
    }
  };

  const badgeClass = yearBadgeColor[formData.year] || 'bg-secondary';

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="card-body">

        {isEditing ? (
          <>
            <h6 className="text-muted mb-3">✏️ Editing Student</h6>

            <div className="mb-2">
              <label className="form-label small fw-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="form-label small fw-semibold">Roll Number</label>
              <input
                type="text"
                name="rollNumber"
                className="form-control form-control-sm"
                value={formData.rollNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="form-label small fw-semibold">Degree Program</label>
              <select
                name="degree"
                className="form-select form-select-sm"
                value={formData.degree}
                onChange={handleChange}
              >
                {DEGREES.map((deg) => (
                  <option key={deg} value={deg}>{deg}</option>
                ))}
              </select>
            </div>

            <div className="mb-2">
              <label className="form-label small fw-semibold">Year</label>
              <select
                name="year"
                className="form-select form-select-sm"
                value={formData.year}
                onChange={handleChange}
              >
                {YEARS.map((yr) => (
                  <option key={yr} value={yr}>{yr}</option>
                ))}
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label small fw-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="d-flex gap-2">
              <button
                className="btn btn-success btn-sm flex-grow-1"
                onClick={handleUpdate}
              >
                💾 Save
              </button>
              <button
                className="btn btn-secondary btn-sm"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <span className={`badge ${badgeClass} float-end`}>
              {student.year || '1st Year'}
            </span>

            <h5 className="card-title mb-1">{student.name}</h5>
            <p className="text-muted small mb-2">
              Roll No: {student.rollNumber}
            </p>

            <p className="badge bg-light text-dark border mb-3 fw-normal">
              🎓 {student.degree || student.class}
            </p>

            <ul className="list-unstyled small mb-0">
              <li>📧 {student.email}</li>
            </ul>

            <div className="d-flex gap-2 mt-3">
              <button
                className="btn btn-outline-primary btn-sm flex-grow-1"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit
              </button>

              <button
                className="btn btn-outline-danger btn-sm"
                onClick={handleDelete}
              >
                🗑️ Delete
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default StudentDetails;