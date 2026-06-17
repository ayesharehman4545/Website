import React from "react";
import { Link } from "react-router-dom";

function About() {
const stats = [
{ number: "10+", title: "Years Experience" },
{ number: "50K+", title: "Happy Customers" },
{ number: "120+", title: "Food Dishes" },
{ number: "25+", title: "Expert Chefs" },
];

const team = [
{
name: "Ahmed Khan",
role: "Head Chef",
image: process.env.PUBLIC_URL + "/images/ahmad.jpg",
},
{
name: "Sara Ali",
role: "Restaurant Manager",
image: process.env.PUBLIC_URL + "/images/sara.jpg",
},
{
name: "Usman Tariq",
role: "Executive Chef",
image: process.env.PUBLIC_URL + "/images/usman.jpg",
},
];

return ( <div className="container-fluid p-0">
  <section
    className="text-white text-center d-flex align-items-center justify-content-center"
    style={{
      height: "70vh",
      backgroundImage: `linear-gradient( rgba(0,0,0,0.6),rgba(0,0,0,0.6)  ),url(${process.env.PUBLIC_URL + "/images/about2.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div>
      <h1 className="display-3 fw-bold">
        About Foodies
      </h1>
      <p className="lead">
        Delicious Food, Memorable Moments
      </p>
    </div>
  </section>

  <section className="container py-5">
    <div className="row align-items-center">

      <div className="col-lg-6">
        <img
          src={process.env.PUBLIC_URL + "/images/about3.jpg"}
          alt="restaurant"
          className="img-fluid rounded-4 shadow"
        />
      </div>

      <div className="col-lg-6 mt-4 mt-lg-0">
        <h2 className="fw-bold mb-3">
          Welcome To Foodies
        </h2>

        <p className="text-muted">
          Foodies is more than a restaurant.
          It is a place where flavors,
          quality ingredients, and warm
          hospitality come together.
          Since 2015, we have been serving
          customers with passion and
          excellence.
        </p>

       <Link to="/menu">
         <button className="btn btn-danger px-4 py-2 rounded-pill">
             Explore Menu
            </button>
        </Link>
      </div>

    </div>
  </section>

  <section className="bg-light py-5">
    <div className="container text-center">

      <h2 className="fw-bold mb-4">
        Our Story
      </h2>

      <p className="text-muted mx-auto"
         style={{ maxWidth: "800px" }}>
        What started as a small family-owned
        restaurant has grown into one of the
        most loved dining destinations.
        Every meal we serve reflects our
        commitment to quality, freshness
        and customer satisfaction.
      </p>

    </div>
  </section>

  <section className="container py-5">
    <div className="row">

      <div className="col-md-6 mb-4">
        <div className="card border-0 shadow-lg h-100 p-4">
          <h3 className="text-danger">
            Our Mission
          </h3>

          <p>
            To provide exceptional food
            experiences through fresh
            ingredients, innovative recipes
            and outstanding service.
          </p>
        </div>
      </div>

      <div className="col-md-6 mb-4">
        <div className="card border-0 shadow-lg h-100 p-4">
          <h3 className="text-danger">
            Our Vision
          </h3>

          <p>
            To become the most trusted and
            loved restaurant brand known
            for quality, innovation,
            and hospitality.
          </p>
        </div>
      </div>

    </div>
  </section>

  <section className="bg-danger text-white py-5">
    <div className="container">
      <div className="row text-center">

        {stats.map((item, index) => (
          <div
            key={index}
            className="col-md-3 col-6 mb-4"
          >
            <h1 className="fw-bold">
              {item.number}
            </h1>
            <p>{item.title}</p>
          </div>
        ))}

      </div>
    </div>
  </section>

  <section className="container py-5">
    <h2 className="text-center fw-bold mb-5">
      Restaurant Gallery
    </h2>

    <div className="row">

      <div className="col-md-4 mb-4">
        <img
          src={process.env.PUBLIC_URL + "/images/about-gallery.jpg"}
          alt=""
          className="img-fluid rounded-4 shadow"
        />
      </div>

      <div className="col-md-4 mb-4">
        <img
        src={process.env.PUBLIC_URL + "/images/aboout-gallery8.jpg"}
        alt="About Gallery"
        className="img-fluid rounded-4 shadow"/>
      </div>

      <div className="col-md-4 mb-4">
        <img
          src={process.env.PUBLIC_URL + "/images/about-gallery2.jpg"}
          alt=""
          className="img-fluid rounded-4 shadow"
        />
      </div>
      <div className="col-md-4 mb-4">
        <img
          src={process.env.PUBLIC_URL + "/images/about-galeery7.jpg"}
          alt=""
          className="img-fluid rounded-4 shadow"
        />
      </div>
      <div className="col-md-4 mb-4">
        <img
          src={process.env.PUBLIC_URL + "/images/about4.jpg"}
          alt=""
          className="img-fluid rounded-4 shadow"
        />
      </div>
      <div className="col-md-4 mb-4">
        <img
          src={process.env.PUBLIC_URL + "/images/about-gallery6.jpg"}
          alt=""
          className="img-fluid rounded-4 shadow"
        />
      </div>

    </div>
  </section>

  <section className="bg-light py-5">
    <div className="container">

      <h2 className="text-center fw-bold mb-5">
        Meet Our Team
      </h2>

      <div className="row">

        {team.map((member, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 mb-4"
          >
            <div className="card border-0 shadow-lg text-center">

              <img
                src={member.image}
                alt={member.name}
                className="card-img-top"
                style={{
                  height: "350px",
                  objectFit: "cover",
                }}
              />

              <div className="card-body">
                <h5>{member.name}</h5>
                <p className="text-muted">
                  {member.role}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>

    </div>

  </section>
</div>


);
}

export default About;
