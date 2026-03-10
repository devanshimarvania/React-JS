import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';

const Navbar = () => {

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">

        <Link className="navbar-brand fw-bold fs-4" to="/">
          🎓 StudentHub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-2">

            {isAuthenticated ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">📋 Student List</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add">➕ Add Student</Link>
                </li>
                <li className="nav-item">
                  <span className="nav-link text-warning">
                    👤 {user?.name}
                  </span>
                </li>
                <li className="nav-item">
                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={handleLogout}
                  >
                    🚪 Sign Out
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <Link className="btn btn-light btn-sm text-primary fw-semibold" to="/login">
                  🔑 Sign In
                </Link>
              </li>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;