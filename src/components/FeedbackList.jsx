import React from "react";
import FeedbackCard from "./FeedbackCard";

function FeedbackList({ feedbacks }) {
  return (
    <div className="feedback-list">
      <h2>Submitted Feedback</h2>

      {feedbacks.length === 0 && <p>No feedback submitted yet.</p>}

      {feedbacks.map((fb) => (
        <FeedbackCard key={fb.id} fb={fb} />
      ))}
    </div>
  );
}

export default FeedbackList;
