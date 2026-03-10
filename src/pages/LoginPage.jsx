import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../redux/actions/authActions';

const LoginPage = () => {
  const dispatch  = useDispatch();
  const navigate  = useNavigate();

  const { isAuthenticated, error } = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // If user is already logged in, redirect home
  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(username, password));
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <div className="card shadow-lg border-0" style={{ width: '100%', maxWidth: '420px' }}>
        <div className="card-body p-5">

          {/* Icon & Title */}
          <div className="text-center mb-4">
            <div className="display-4 mb-2">🎓</div>
            <h3 className="fw-bold">StudentHub</h3>
            <p className="text-muted">Sign in to manage students</p>
          </div>

          {/* Error alert */}
          {error && (
            <div className="alert alert-danger py-2 small">
              ⚠️ {error}
            </div>
          )}

          {/* Demo credentials hint */}
          <div className="alert alert-info py-2 small mb-4">
            💡 Demo: username <strong>admin</strong>, password <strong>admin123</strong>
          </div>

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
              🔑 Sign In
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;