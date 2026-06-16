import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
              <Link className="nav-link fw-medium text-warning" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50" to="/menu">
                Menu
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50" to="/reviews">
                Reviews
              </Link>
            </li>

            <li className="nav-item px-2">
              <Link className="nav-link fw-medium text-white-50" to="/contact">
                Contact
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link to="/menu">
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