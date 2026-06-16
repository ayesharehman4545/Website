import React from "react";
import { FaUtensils, FaCalendarCheck, FaMotorcycle } from "react-icons/fa6";
import { GiChefToque } from "react-icons/gi";

function WhyChooseUs() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Why Choose Us?</h2>
          <p className="text-muted">
            Experience premium dining, easy reservations, and fast delivery.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm text-center h-100 p-4">
              <FaUtensils size={50} color="#c59d5f" className="mx-auto mb-3" />
              <h5 className="fw-bold">Delicious Food</h5>
              <p className="text-muted">
                Fresh ingredients and authentic flavors in every meal.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm text-center h-100 p-4">
              <GiChefToque size={50} color="#c59d5f" className="mx-auto mb-3" />
              <h5 className="fw-bold">Expert Chefs</h5>
              <p className="text-muted">
                Our skilled chefs prepare every dish with perfection.
              </p>
            </div>
          </div>

        
          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm text-center h-100 p-4">
              <FaCalendarCheck
                size={50}
                color="#c59d5f"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">Easy Reservation</h5>
              <p className="text-muted">
                Reserve your table online anytime in just a few clicks.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="card border-0 shadow-sm text-center h-100 p-4">
              <FaMotorcycle
                size={50}
                color="#c59d5f"
                className="mx-auto mb-3"
              />
              <h5 className="fw-bold">Fast Delivery</h5>
              <p className="text-muted">
                Hot and fresh meals delivered directly to your doorstep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;