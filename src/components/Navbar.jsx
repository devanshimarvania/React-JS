function Navbar({ theme, toggleTheme }) {
  return (
    <nav className={`navbar navbar-expand-lg ${theme === "dark" ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
      <div className="container">
        <span className="navbar-brand fw-bold">API Hunter</span>
        <button className="btn btn-outline-primary" onClick={toggleTheme}>
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;