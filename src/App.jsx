import React, { useState, useEffect } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [records, setRecords] = useState([]);
  const [recordToEdit, setRecordToEdit] = useState(null);

  // Load records from localStorage on mount
  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(storedRecords);
  }, []);

  // Save records to localStorage whenever records change
  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    record.id = Date.now(); // Unique ID
    setRecords([...records, record]);
  };

  const editRecord = (updatedRecord) => {
    setRecords(
      records.map((rec) => (rec.id === updatedRecord.id ? updatedRecord : rec))
    );
    setRecordToEdit(null);
  };

  const deleteRecord = (id) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      setRecords(records.filter((rec) => rec.id !== id));
    }
  };

  const startEdit = (id) => {
    const rec = records.find((r) => r.id === id);
    setRecordToEdit(rec);
  };

  const cancelEdit = () => setRecordToEdit(null);

  const clearAllRecords = () => {
    if (window.confirm("Are you sure you want to clear all records?")) {
      setRecords([]);
    }
  };

  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center">LocalBox Miner</h1>
      <RecordForm
        addRecord={addRecord}
        editRecord={editRecord}
        recordToEdit={recordToEdit}
        cancelEdit={cancelEdit}
      />
      <Dashboard
        totalRecords={records.length}
        lastAdded={records[records.length - 1]}
        clearAllRecords={clearAllRecords}
      />
      <RecordList
        records={records}
        deleteRecord={deleteRecord}
        startEdit={startEdit}
      />
    </div>
  );
};

export default App;
