import React from "react";

const FeaturedDishes = () => {
  const dishes = [
  { name: "Zinger Burger", img: process.env.PUBLIC_URL + "/images/burger.jfif" },
  { name: "Chicken Shawarma", img: process.env.PUBLIC_URL + "/images/shawarma.jfif" },
  { name: "Chicken Pizza", img: process.env.PUBLIC_URL + "/images/pizza.jfif" },
  { name: "Loaded Fries", img: process.env.PUBLIC_URL + "/images/fries.jfif" },
  { name: "Chicken Broast", img: process.env.PUBLIC_URL + "/images/broast.jfif" },
  { name: "Club Sandwich", img: process.env.PUBLIC_URL + "/images/sandwich.jfif" },
  { name: "Chicken Wings", img: process.env.PUBLIC_URL + "/images/wings.jfif" },
  { name: "Chicken Roll", img: process.env.PUBLIC_URL + "/images/roll.jfif" },
  { name: "Steak", img: process.env.PUBLIC_URL + "/images/steak.jfif" },
  { name: "Peri Peri Bites", img: process.env.PUBLIC_URL + "/images/bites.jfif" },
  { name: "Chicken Pasta", img: process.env.PUBLIC_URL + "/images/pasta.jfif" },
  { name: "Tacos", img: process.env.PUBLIC_URL + "/images/tacos.jfif" },
];

  return (
    <section
      className="py-5"
      style={{
        background: "linear-gradient(to bottom, #fff8f5, #ffffff)",
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold display-5 text-danger">Featured Dishes</h2>
          <p className="text-muted fs-5">
            Fresh, Hot & Delicious Food Delivered To Your Doorstep
          </p>
        </div>

        <div className="row g-4">
          {dishes.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div
                className="card border-0 shadow h-100"
                style={{
                  borderRadius: "20px",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 .5rem 1rem rgba(0,0,0,.15)";
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="card-img-top"
                  style={{
                    height: "230px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body text-center p-4">
                  <h5 className="fw-bold mb-2">{item.name}</h5>

                  <p className="text-danger fw-bold fs-4 mb-3">
                    {item.price}
                  </p>

                  <button className="btn btn-danger rounded-pill px-4 py-2 fw-semibold">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;