import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStudents } from '../redux/actions/studentActions';
import StudentDetails from './StudentDetails.jsx';

const StudentList = () => {
  const dispatch = useDispatch();
  const { loading, students, error } = useSelector((state) => state.students);

  const [sortBy, setSortBy] = useState('name');
  const [filterDegree, setFilterDegree] = useState('All');
  const [filterYear, setFilterYear] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const degrees = ['All', ...new Set(students.map((s) => s.degree || s.class))].sort();
  const years = ['All', '1st Year', '2nd Year', '3rd Year', '4th Year'];

  const processedStudents = students
    .filter((s) => filterDegree === 'All' || (s.degree || s.class) === filterDegree)
    .filter((s) => filterYear === 'All' || s.year === filterYear)
    .filter((s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.rollNumber.toString().includes(searchTerm)
    )
    .sort((a, b) =>
      sortBy === 'name'
        ? a.name.localeCompare(b.name)
        : a.rollNumber.toString().localeCompare(b.rollNumber.toString())
    );

  return (
    <div className="container py-4">

      <div className="mb-4">
        <h2 className="fw-bold mb-0">📋 Student List</h2>
        <p className="text-muted small mb-0">{students.length} students enrolled</p>
      </div>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-3">

            <div className="col-md-3">
              <label className="form-label fw-semibold small">🔍 Search</label>
              <input
                type="text"
                className="form-control"
                placeholder="Name or roll number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold small">🎓 Filter by Degree</label>
              <select
                className="form-select"
                value={filterDegree}
                onChange={(e) => setFilterDegree(e.target.value)}
              >
                {degrees.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold small">📅 Filter by Year</label>
              <select
                className="form-select"
                value={filterYear}
                onChange={(e) => setFilterYear(e.target.value)}
              >
                {years.map((y) => (
                  <option key={y} value={y}>{y}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <label className="form-label fw-semibold small">↕️ Sort By</label>
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="name">Name (A–Z)</option>
                <option value="rollNumber">Roll Number</option>
              </select>
            </div>

          </div>
        </div>
      </div>

      <p className="text-muted small mb-3">
        Showing {processedStudents.length} of {students.length} students
      </p>

      {loading && (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3 text-muted">Loading students...</p>
        </div>
      )}

      {error && (
        <div className="alert alert-danger">
          ⚠️ Error: {error}<br />
          <small>Make sure JSON Server is running: <code>npm run server</code></small>
        </div>
      )}

      {!loading && !error && processedStudents.length === 0 && (
        <div className="text-center py-5 text-muted">
          <p className="fs-1">😕</p>
          <p>No students found. Try adjusting the filters.</p>
        </div>
      )}

      {!loading && !error && (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {processedStudents.map((student) => (
            <div className="col" key={student.id}>
              <StudentDetails student={student} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default StudentList;