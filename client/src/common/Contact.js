import React from 'react'

const Contact = () => {
  return (
  <section className="bg-light py-7 py-md-10">
  <div className="container">
    <div className="row wow fadeInUp">
      <div className="col-sm-6 col-xs-12">
        <div className="section-title align-items-baseline mb-4">
          <h2 className="text-danger px-0 mb-0">Our Address</h2>
        </div>
        <p className="text-dark font-size-15">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <ul className="list-unstyled">
          <li className="media align-items-center mb-3">
            <div className="icon-rounded-circle-small bg-primary me-2">
              <i className="fas fa-map-marker-alt text-white"></i>
            </div>
            <div className="media-body">
              <p className="mb-0">9/4/C Ring Road,Garden Street Dhaka,Bangladesh-1200</p>
            </div>
          </li>
          <li className="media align-items-center mb-3">
            <div className="icon-rounded-circle-small bg-success me-2">
              <i className="fas fa-envelope text-white"></i>
            </div>
            <div className="media-body">
              <p className="mb-0"><a className="text-color" href="mailto:hello@example.com">hello@example.com</a></p>
            </div>
          </li>
          <li className="media align-items-center mb-3">
            <div className="icon-rounded-circle-small bg-info me-2">
              <i className="fas fa-phone-alt text-white"></i>
            </div>
            <div className="media-body">
              <p className="mb-0"><a className="text-color" href="tel:[00] 333 555 888">333 555 888</a></p>
            </div>
          </li>
        </ul>
      </div>
      <div className="col-sm-6 col-xs-12">
        <form>
          <div className="form-group form-group-icon">
            <i className="fas fa-user" aria-hidden="true"></i>
            <input type="text" className="form-control border-primary" placeholder="First name" required/>
          </div>
          <div className="form-group form-group-icon">
            <i className="fas fa-envelope" aria-hidden="true"></i>
            <input type="email" className="form-control border-success" placeholder="Email address" required/>
          </div>
          <div className="form-group form-group-icon">
            <i className="fas fa-comments" aria-hidden="true"></i>
            <textarea className="form-control border-info" placeholder="Write message" rows="6"></textarea>
          </div>
            <button type="submit" className="btn btn-danger float-right text-uppercase">
              Send Message
            </button>
        </form>
      </div>
    </div>
  </div>
</section>
)}

export default Contact