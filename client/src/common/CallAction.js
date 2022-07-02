import React from 'react'

const CallAction = () => {
  return (
    <section
      className="py-9 bg-parallax"
      style={{backgroundImage: "url(assets/img/background/background-img-1.jpg)"}}
    >
      <div className="container">
        <div className="wow fadeInUp">
          <div className="section-title justify-content-center">
            <h2 className="text-white text-center">Need More Information?</h2>
          </div>
          <div className="text-center">
            <p className="text-white font-size-18 mb-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
              eiusmod
            </p>
            <a
              href="contact-us.html"
              className="btn btn-danger shadow-sm text-uppercase mt-4"
            >
              <i className="fas fa-phone-alt me-2" aria-hidden="true"></i>Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallAction