import React from 'react'

const productModal = () => {
  return (
    <div className="modal fade" id="modal-products" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg" role="document">
    <div className="modal-content">
      <div className="modal-header border-0">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <div className="row">
          <div className="col-sm-6 col-xs-12">
            <img className="img-fluid d-block mx-auto" src="assets/img/products/products-preview01.jpg" alt="preview01.jpg"/>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="product-single">
              <h1>Barbie Racing Car</h1>

              <span className="pricing font-size-55">$50 <del>$60</del></span>

              <p className="mb-7">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>

              <div className="add-cart mb-0">
                <div className="count-input">
                  <input className="quantity btn-primary" type="text" value="1"/>
                  <a className="incr-btn incr-up" data-action="decrease" href="#"><i className="fa fa-caret-up" aria-hidden="true"></i></a>
                  <a className="incr-btn incr-down" data-action="increase" href="#"><i className="fa fa-caret-down" aria-hidden="true"></i></a>
                </div>
                <button type="button" className="btn btn-danger text-uppercase" onclick="location.href='product-cart.html';">Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default productModal