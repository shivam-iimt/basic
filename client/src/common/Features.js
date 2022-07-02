import React from 'react'
import { featureData } from '../constants/constant';
const Features = () => {
  return (
    <section className="pt-9 pb-6 py-md-7">
      <div className="container">
        <div className="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
          <span className="shape shape-left bg-info"></span>
          <h2 className="text-danger">Our Features</h2>
          <span className="shape shape-right bg-info"></span>
        </div>

        <div className="row wow fadeInUp">
          {featureData?.map((data) => (
            <div className="col-sm-6 col-xl-4 col-xs-12">
              <div className="media mb-6">
                <div className={`media-icon-large bg-${data?.color} me-xl-4`}>
                  <i className={data?.iconClass} aria-hidden="true"></i>
                </div>

                <div className="media-body">
                  <h3 className="text-success">{data?.title}</h3>
                  <p>{data?.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features