import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-5 pb-4" style={{ backgroundColor: '#a7a4a6', color: '#555' }}>
      <div className="container">
        <div className="row g-4">
          
          <div className="col-lg-3 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={process.env.PUBLIC_URL + "/images/logo1.png"}
              alt="Foodies Logo"
              style={{
               height: "50px",
                 width: "auto",
                 borderRadius: "6px",
                 objectFit: "contain"
                  }}
/>
            </div>
            <p className="small text-muted" style={{ lineHeight: '1.7' }}>
              We serve the freshest and most delicious meals crafted by our expert chefs. Your satisfaction is our top priority.
            </p>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-dark mb-3">Links</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small">
              <li><a href="#" className="text-decoration-none text-muted" onMouseEnter={(e) => e.target.style.color = '#dc3545'} onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Home</a></li>
              <li><a href="#" className="text-decoration-none text-muted" onMouseEnter={(e) => e.target.style.color = '#dc3545'} onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Menu</a></li>
              <li><a href="#" className="text-decoration-none text-muted" onMouseEnter={(e) => e.target.style.color = '#dc3545'} onMouseLeave={(e) => e.target.style.color = '#6c757d'}>About Us</a></li>
              <li><a href="#" className="text-decoration-none text-muted" onMouseEnter={(e) => e.target.style.color = '#dc3545'} onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Contact</a></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-dark mb-3">Contact</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li>📍 Lahore, Punjab, Pakistan</li>
              <li>📞 +92 3167421638</li>
              <li>✉️ info@foodiesrestaurant.com</li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold text-dark mb-3">Opening Hours</h5>
            <ul className="list-unstyled d-flex flex-column gap-2 small text-muted">
              <li>Monday - Friday: 11:00 AM - 01:00 PM</li>
              <li>Saturday - Sunday: 11:00 PM - 03:00 AM</li>
            </ul>
          </div>

        </div>
        <hr className="mt-4 mb-3" style={{ borderTop: '1px solid #e5dcd5' }} />
        
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
          <small className="text-muted">
            © 2026 Foodies Restaurant. All Rights Reserved.
          </small>
          
          <div className="d-flex gap-3 small">
            <a href="#" className="text-muted text-decoration-none" onMouseEnter={(e) => e.target.style.color = '#3b5998'} onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Facebook</a>
            <a href="#" className="text-muted text-decoration-none" onMouseEnter={(e) => e.target.style.color = '#e1306c'} onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Instagram</a>
            <a href="#" className="text-muted text-decoration-none" onMouseEnter={(e) => e.target.style.color = '#1da1f2'} onMouseLeave={(e) => e.target.style.color = '#6c757d'}>Twitter</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;