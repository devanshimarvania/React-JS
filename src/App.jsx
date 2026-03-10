import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar        from './components/Navbar.jsx';
import PrivateRoute  from './components/PrivateRoute.jsx';
import StudentList   from './components/StudentList.jsx';
import StudentForm   from './components/StudentForm.jsx';
import LoginPage     from './pages/LoginPage.jsx';

function App() {
  return (
    <Router>
      <Navbar />

      <main style={{ minHeight: '90vh', backgroundColor: '#f8f9fa' }}>
        <Routes>

          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <StudentList />
              </PrivateRoute>
            }
          />

          <Route
            path="/add"
            element={
              <PrivateRoute>
                <StudentForm />
              </PrivateRoute>
            }
          />

        </Routes>
      </main>
    </Router>
  );
}

export default App;