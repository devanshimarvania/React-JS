import React from "react";

const Dashboard = ({ totalRecords, lastAdded, clearAllRecords }) => {
  return (
    <div className="card p-3 mb-4 shadow-sm">
      <h5>Dashboard Summary</h5>
      <div className="d-flex justify-content-between flex-wrap">
        <div>Total Records: <strong>{totalRecords}</strong></div>
        <div>
          Last Added Record:{" "}
          <strong>{lastAdded ? lastAdded.name : "N/A"}</strong>
        </div>
        <div>
          <button className="btn btn-sm btn-danger" onClick={clearAllRecords}>
            Clear All Records
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
