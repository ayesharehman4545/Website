import React from 'react';

const Navbar = () => {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark fixed-top shadow-sm" 
      style={{  backdropFilter: 'blur(8px)',  backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'background-color 0.3s ease'  }}>
      <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center gap-2" href="#">
          <img src="/images/logo1.png" alt="Foodies" style={{ height: '70px', width: 'auto', borderRadius: '6px', objectFit: 'contain' }} /> 
        </a>
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item px-2">
              <a className="nav-link active fw-medium text-warning" href="#">Home</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-medium text-white-50" href="#">Menu</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-medium text-white-50" href="#">About</a>
            </li>
             <li className="nav-item px-2">
              <a className="nav-link fw-medium text-white-50" href="#">Reviews</a>
            </li>
            <li className="nav-item px-2">
              <a className="nav-link fw-medium text-white-50" href="#">Contact</a>
            </li>
            <li className="nav-item ms-lg-3">
              <button className="btn btn-danger btn-sm rounded-pill px-4 fw-bold">
                Order Now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;