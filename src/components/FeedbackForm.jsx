import React, { useRef, useState } from "react";
import DynamicList from "./DynamicList";

function FeedbackForm({ onSubmit }) {
  // Controlled fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const [steps, setSteps] = useState([""]);
  const [suggestions, setSuggestions] = useState([""]);

  // Uncontrolled fields
  const screenshotRef = useRef();
  const notesRef = useRef();

  // Errors
  const [errors, setErrors] = useState({});

  const validate = () => {
    const err = {};

    if (!name.trim()) err.name = "Name is required";
    if (!email.match(/^\S+@\S+\.\S+$/)) err.email = "Invalid email";
    if (!category) err.category = "Select a category";
    if (!priority) err.priority = "Select priority";
    if (description.length < 10) err.description = "Min 10 characters";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formData = {
      name,
      email,
      category,
      priority,
      description,
      steps,
      suggestions,
      screenshot: screenshotRef.current.value,
      notes: notesRef.current.value,
      time: new Date().toLocaleString(),
    };

    onSubmit(formData);

    // Reset form
    setName("");
    setEmail("");
    setCategory("");
    setPriority("");
    setDescription("");
    setSteps([""]);
    setSuggestions([""]);
    screenshotRef.current.value = "";
    notesRef.current.value = "";
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Submit Your Feedback</h2>

      <div className="form-group">
        <label>Full Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={errors.name ? "error-input" : ""}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={errors.email ? "error-input" : ""}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div className="form-group">
        <label>Issue Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={errors.category ? "error-input" : ""}
        >
          <option value="">-- Select --</option>
          <option>Bug</option>
          <option>Suggestion</option>
          <option>Complaint</option>
          <option>Other</option>
        </select>
        {errors.category && <p className="error">{errors.category}</p>}
      </div>

      <div className="form-group">
        <label>Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className={errors.priority ? "error-input" : ""}
        >
          <option value="">-- Select --</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
        {errors.priority && <p className="error">{errors.priority}</p>}
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className={errors.description ? "error-input" : ""}
        />
        {errors.description && <p className="error">{errors.description}</p>}
      </div>

      {/* Dynamic Rows */}
      <DynamicList title="Steps to Reproduce" items={steps} setItems={setSteps} />
      <DynamicList title="Suggested Improvements" items={suggestions} setItems={setSuggestions} />

      {/* Uncontrolled */}
      <div className="form-group">
        <label>Screenshot URL (optional)</label>
        <input ref={screenshotRef} placeholder="https://example.com/image.png" />
      </div>

      <div className="form-group">
        <label>Additional Notes</label>
        <textarea ref={notesRef} placeholder="Write anything..."></textarea>
      </div>

      <button className="submit-btn">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
