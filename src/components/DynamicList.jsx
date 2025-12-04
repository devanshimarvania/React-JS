import React from "react";

function DynamicList({ title, items, setItems }) {
  const updateItem = (index, value) => {
    const newList = [...items];
    newList[index] = value;
    setItems(newList);
  };

  const addItem = () => setItems([...items, ""]);
  const removeItem = (index) =>
    setItems(items.filter((_, i) => i !== index));

  return (
    <div className="dynamic-block">
      <label>{title}</label>

      {items.map((item, index) => (
        <div key={index} className="dynamic-row">
          <input
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
            placeholder={`Enter ${title}...`}
          />
          <button type="button" className="remove-btn" onClick={() => removeItem(index)}>
            X
          </button>
        </div>
      ))}

      <button type="button" className="add-btn" onClick={addItem}>
        + Add More
      </button>
    </div>
  );
}

export default DynamicList;
