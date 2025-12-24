import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployee from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-employee" element={<AddEmployee />} />
          <Route path="/view-employee" element={<ViewEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
