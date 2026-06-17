import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const closeMenu = () => {
  const navbar = document.getElementById("navbarNav");
  if (navbar.classList.contains("show")) {
    navbar.classList.remove("show");
  }
};
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm"
      style={{
        backdropFilter: "blur(8px)",
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        transition: "background-color 0.3s ease",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand fw-bold d-flex align-items-center gap-2"
          to="/"
        >
          <img
            src={process.env.PUBLIC_URL + "/images/logo1.png"}
            alt="Foodies Logo"
            style={{
              height: "70px",
              width: "auto",
              borderRadius: "6px",
              objectFit: "contain",
            }}
          />
        </Link>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">

            <li className="nav-item px-2">
             <Link className="nav-link fw-medium text-warning" to="/"  onClick={closeMenu} >
              Home
            </Link>
            </li>

            <li className="nav-item px-2">
                <Link className="nav-link fw-medium text-white-50"  to="/menu" onClick={closeMenu}>
                Menu
                </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50" to="/about"onClick={closeMenu}>
                About
              </Link>
            </li>

            <li className="nav-item px-2">
              <HashLink smooth  className="nav-link fw-medium text-white-50" to="/#reviews" onClick={closeMenu}>
              Reviews
              </HashLink>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50"  to="/contact" onClick={closeMenu}>
              Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link to="/menu" onClick={closeMenu} >
                <button className="btn btn-danger btn-sm rounded-pill px-4 fw-bold">
                  Order Now
                </button>
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;