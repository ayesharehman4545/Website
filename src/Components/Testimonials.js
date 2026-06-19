import React from 'react';

const Testimonials = () => {
 const feedbackData = [
  {
    id: 1,
    name: "Ayesha",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic1.jfif",
    rating: 5,
    comment: "The food was absolutely delicious and arrived piping hot! The flavors were perfectly balanced. Highly recommended!"
  },
  {
    id: 2,
    name: "Noor ul ain",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic2.jfif",
    rating: 5,
    comment: "Amazing customer service and top-notch quality. This has officially become my go-to place for weekly cravings."
  },
  {
    id: 3,
    name: "Shiza",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic3.jfif",
    rating: 5,
    comment: "Every dish we ordered surpassed our expectations. Clean packaging and fresh ingredients used throughout."
  },
  {
    id: 4,
    name: "Zaina",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic4.jfif",
    rating: 4,
    comment: "Incredibly fast delivery and the Zinger burger was pure perfection. Will definitely be ordering again soon!"
  },
  {
    id: 5,
    name: "Maryam",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic5.jfif",
    rating: 4,
    comment: "The best pizza in town hands down! The crust was thin, crispy, and the toppings were incredibly generous."
  },
  {
    id: 6,
    name: "Muaaz",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic6.jfif",
    rating: 5,
    comment: "Super healthy options that actually taste fantastic. Great value for money and wonderful presentation."
  },
  {
    id: 7,
    name: "Malaika",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic7.jfif",
    rating: 4,
    comment: "Prompt delivery, polite riders, and mouth-watering dishes. Their peri peri bites are an absolute must-try!"
  },
  {
    id: 8,
    name: "Romman",
    role: "Food Blogger",
    image: process.env.PUBLIC_URL + "/images/pic8.jfif",
    rating: 5,
    comment: "An exceptional culinary experience at home. The pasta was creamy, rich, and perfectly cooked. 10/10!"
  }
];

  return (
    <section
  id="reviews"  className="py-5" style={{ backgroundColor: '#fffdfb' }}>
      <div className="container">
        
        <div className="text-center mb-5">
          <span className="text-danger fw-bold text-uppercase tracking-wider fs-6" style={{ letterSpacing: '2px' }}>
            Testimonials
          </span>
          <h2 className="fw-bold display-6 text-dark mt-1">
            WHAT SAYS OUR CUSTOMERS
          </h2>
        </div>

        <div className="row g-4">
          {feedbackData.map((item) => (
            <div className="col-lg-3 col-md-6 col-sm-12" key={item.id}>
              <div 
                className="card border-0 p-4 h-100 position-relative" 
                style={{ 
                  borderRadius: '16px', 
                  boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                  backgroundColor: '#ffffff',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
            
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="text-warning small">
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i} className="me-1">★</span>
                    ))}
                  </div>
        
                  <span className="text-light fs-1 lh-1 position-absolute top-0 end-0 pe-3 pt-2" style={{ opacity: 0.4, fontFamily: 'serif' }}>
                     ”
                  </span>
                </div>

               
                <p className="text-muted small mb-4" style={{ lineHeight: '1.6' }}>
                  "{item.comment}"
                </p>

                <div className="d-flex align-items-center mt-auto">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="rounded-circle me-3"
                    style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold mb-0 text-dark small">{item.name}</h6>
                    <small className="text-muted" style={{ fontSize: '11px' }}>{item.role}</small>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;