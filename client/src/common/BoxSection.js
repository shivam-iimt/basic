import React from "react";
import { boxSectionData } from "../constants/constant";
const BoxSection = () => {
  return (
    <section className="d-none d-sm-block section-top">
      <div className="container">
        <div className="row wow fadeInUp">
          {boxSectionData.map((data) => (
            <div className="col-sm-3">
              <a href="#courses">
                <div className={`card bg-${data?.color} card-hover`}>
                  <div className="card-body text-center p-0">
                    <div
                      className={`card-icon-border-large border-${data?.color}`}
                    >
                      <i className={data?.iconClass} aria-hidden="true"></i>
                    </div>
                    <h2 className="text-white font-size-32 pt-1 pt-lg-5 pb-2 pb-lg-6 mb-0 font-dosis">
                      {data?.title}
                    </h2>
                    <a
                      href="#courses"
                      className="btn-scroll-down d-block pb-4 pb-lg-5"
                    >
                      <i className="fas fa-chevron-down" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoxSection;
