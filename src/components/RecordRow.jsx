import React from "react";

const RecordRow = ({ record, deleteRecord, startEdit }) => {
    return (
        <tr>
            <td>{record.rollNo}</td>
            <td>{record.name}</td>
            <td>{record.email}</td>
            <td>{record.course}</td>
            <td>{record.dob}</td>
            <td>
                <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => startEdit(record.id)}
                >
                    Edit
                </button>
                <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deleteRecord(record.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default RecordRow;
