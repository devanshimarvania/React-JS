import React from "react";

function FeedbackCard({ fb }) {
  return (
    <div className="feedback-card">
      <div className="card-header">
        <h3>{fb.name}</h3>
        <span className={`badge ${fb.priority.toLowerCase()}`}>
          {fb.priority}
        </span>
      </div>

      <p><strong>Email:</strong> {fb.email}</p>
      <p><strong>Category:</strong> {fb.category}</p>
      <p><strong>Description:</strong> {fb.description}</p>

      {fb.screenshot && (
        <img src={fb.screenshot} alt="Screenshot" className="screenshot" />
      )}

      <div>
        <strong>Steps to Reproduce:</strong>
        <ul>
          {fb.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <strong>Suggestions:</strong>
        <ul>
          {fb.suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>

      {fb.notes && <p><strong>Notes:</strong> {fb.notes}</p>}

      <p className="timestamp">{fb.time}</p>
    </div>
  );
}

export default FeedbackCard;
