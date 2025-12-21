import React from "react";
import RecordRow from "./RecordRow";

const RecordList = ({ records, deleteRecord, startEdit }) => {
  if (records.length === 0) return <p className="text-center mt-4">No Records Found</p>;

  return (
    <div className="table-responsive mt-4">
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Roll No</th>
            <th>Course</th>
            <th>Date of Birth</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {records.map((rec) => (
            <RecordRow
              key={rec.id}
              record={rec}
              deleteRecord={deleteRecord}
              startEdit={startEdit}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordList;
