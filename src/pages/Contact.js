import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(form.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.subject.trim())
      newErrors.subject = "Subject is required";

    if (!form.message.trim())
      newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Message Sent Successfully!");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setErrors({});
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="contact-page"
     style={{
  minHeight: "100vh",
  backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.7)), url(${process.env.PUBLIC_URL}/images/contact-bg.jpg)`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  paddingTop: "120px",
  paddingBottom: "80px",
}}
    >
      <div className="container">
        <div className="text-center text-white mb-5">
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p className="lead">
            We'd love to hear from you. Get in touch with us.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div
              className="p-4 p-md-5"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                borderRadius: "25px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <h3 className="text-white mb-4">
                Send Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="form-control form-control-lg"
                    value={form.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <small className="text-warning">
                      {errors.name}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="form-control form-control-lg"
                    value={form.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <small className="text-warning">
                      {errors.email}
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="form-control form-control-lg"
                    value={form.subject}
                    onChange={handleChange}
                  />
                  {errors.subject && (
                    <small className="text-warning">
                      {errors.subject}
                    </small>
                  )}
                </div>

                <div className="mb-4">
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Write your message..."
                    className="form-control form-control-lg"
                    value={form.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <small className="text-warning">
                      {errors.message}
                    </small>
                  )}
                </div>

                <button
                  className="btn btn-danger btn-lg px-5"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-lg-5">
            <div
              className="p-4 p-md-5 h-100 text-white"
              style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(12px)",
                borderRadius: "25px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <h3 className="mb-4">Contact Information</h3>

              <div className="mb-4">
                <h5>📍 Address</h5>
                <p>123 Food Street, Lahore, Pakistan</p>
              </div>

              <div className="mb-4">
                <h5>📞 Phone</h5>
                <p>+92 3167421638</p>
              </div>

              <div className="mb-4">
                <h5>✉️ Email</h5>
                <p>info@foodiesrestaurant.com</p>
              </div>

              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Lahore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="250"
                style={{
                  border: 0,
                  borderRadius: "15px",
                }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;