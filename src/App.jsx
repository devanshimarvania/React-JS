import React, { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import './App.css'

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleSubmit = (data) => {
    setFeedbacks([...feedbacks, { ...data, id: Date.now() }]);
  };

  return (
    <div className="app-container">
      <h1>Customer Feedback & Issue Reporting System</h1>

      <FeedbackForm onSubmit={handleSubmit} />

      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
}

export default App;

