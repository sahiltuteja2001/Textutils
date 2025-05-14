import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Use default values directly in destructuring
export default function Navbar({
  title = "Set title here",
  aboutText = "About text here",
  mode,
  toggleMode,
  toggleMode1
}) {
    const getNavbarClasses = () => {
      if (mode === "light") return "navbar-light bg-light";
      if (mode === "dark") return "navbar-dark bg-dark";
      if (mode === "green") return "navbar-dark"; // fallback, color added via style
    };

  return (
    // <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>

    <nav
      className={`navbar navbar-expand-lg ${getNavbarClasses()}`}
      style={mode === "green" ? { backgroundColor: "#198754" } : {}}
    >

      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                {aboutText}
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mx-1"
              onClick={toggleMode}
              type="checkbox"
              role="switch"
              id="switchCheckDark"
              checked={mode === "dark"}
              readOnly
            />
            <label className="form-check-label" htmlFor="switchCheckDark">
              Enable DarkMode
            </label>
          </div>
          
          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input mx-1"
              onClick={toggleMode1}
              type="checkbox"
              role="switch"
              id="switchCheckGreen"
             checked={mode === "green"}
             readOnly
            />
            <label className="form-check-label" htmlFor="switchCheckGreen">
              Enable Green DarkMode
            </label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

// You can still use PropTypes for type checking
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};
