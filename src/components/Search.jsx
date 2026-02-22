import { useState, useEffect } from "react";

function Search({ onSearch }) {
  const [input, setInput] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(input);
    }, 500);

    return () => clearTimeout(delay);
  }, [input]);

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search products..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}

export default Search;