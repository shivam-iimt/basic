import React from 'react'

const CounterUP = () => {
  return (
    <section
      className="py-9 pb-8 bg-parallax"
      style={{backgroundImage: "url(assets/img/background/countup-bg-img.jpg)"}}
    >
      <div className="container">
        <div className="sectionTitleSmall text-center mb-7 wow fadeInUp">
          <h2 className="font-weight-bold text-white">Some Fun Facts</h2>
          <p className="text-white font-size-15">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
            eiusmod
          </p>
        </div>

        <div className="row wow fadeInUp" id="counter">
          <div className="col-sm-3 col-xs-12">
            <div className="text-center text-white mb-5">
              <div className="counter-value" data-count="179">
                0
              </div>
              <span className="d-inline-block bg-primary text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">
                Events Held
              </span>
            </div>
          </div>

          <div className="col-sm-3 col-xs-12">
            <div className="text-center text-white mb-5">
              <div className="counter-value" data-count="548">
                0
              </div>
              <span className="d-inline-block bg-success text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">
                happy funs
              </span>
            </div>
          </div>

          <div className="col-sm-3 col-xs-12">
            <div className="text-center text-white mb-5">
              <div className="counter-value" data-count="305">
                0
              </div>
              <span className="d-inline-block bg-danger text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">
                happy Clients
              </span>
            </div>
          </div>

          <div className="col-sm-3 col-xs-12">
            <div className="text-center text-white mb-5">
              <div className="counter-value" data-count="1000">
                0
              </div>
              <span className="d-inline-block bg-info text-uppercase font-weight-medium rounded-sm shadow-sm mt-1 py-2 px-3">
                hours support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CounterUP