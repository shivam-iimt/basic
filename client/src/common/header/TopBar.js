import React from 'react'

const TopBar = () => {
  return (
    <div className=" bg-stone  top-bar">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 d-none d-lg-block">
                <ul className="list-inline d-flex justify-content-xl-start align-items-center h-100 mb-0">
                  <li>
                    <span className="bg-primary icon-header me-xl-2">
                      <i className="fas fa-envelope" aria-hidden="true"></i>
                    </span>
                    <a href="mailto:info@yourdomain.com" className="me-lg-4 me-xl-6 text-white opacity-80">info@yourdomain.com</a>
                  </li>
                  <li>
                    <span className="bg-success icon-header me-xl-2">
                      <i className="fas fa-phone-alt" aria-hidden="true"></i>
                    </span>
                    <a href="tel:+1 234 567 8900" className="me-lg-4 me-xl-6 text-white opacity-80"> +1 234 567 8900 </a>
                  </li>
                  <li className="text-white">
                    <span className="bg-pink icon-header">
                      <i className="far fa-clock" aria-hidden="true"></i>
                    </span>
                    <span className="opacity-80">Open: 9am - 6pm</span>
                  </li>
                </ul>
              </div>

              <div className="col-lg-5">
                <ul className="list-inline d-flex mb-0 justify-content-xl-end justify-content-center align-items-center me-xl-2">
                  <li>
                    <span className="bg-info icon-header me-lg-0 me-xl-1">
                      <i className="fas fa-globe" aria-hidden="true"></i>
                    </span>
                  </li>
                  <li className="me-3 me-md-4 me-lg-3 me-xl-5 dropdown dropdown-sm">
                    <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown"
                      aria-haspopup="true" aria-expanded="false"> Language </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                      <a className="dropdown-item" href="javascript:void(0)">English</a>
                      <a className="dropdown-item" href="javascript:void(0)">Spanish</a>
                      <a className="dropdown-item" href="javascript:void(0)">Hindi</a>
                    </div>
                  </li>

                  <li className="text-white me-md-3 me-lg-2 me-xl-5">
                    <span className="bg-purple icon-header me-1 me-md-2 me-lg-1 me-xl-2">
                      <i className="fas fa-unlock-alt text-white font-size-13" aria-hidden="true"></i>
                    </span>
                    <a className="text-white font-weight-medium opacity-80" href="javascript:void(0)" data-bs-toggle="modal"
                      data-bs-target="#modal-login">
                      Login
                    </a>
                    <span className="text-white opacity-80">or</span>
                    <a className="text-white font-weight-medium opacity-80" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#modal-createAccount">Create
                      an account</a>
                  </li>

                  <li className="cart-dropdown d-none d-md-block">
                    <div className="cart-icon" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                      <a href="javascript:void(0)">
                        <span className="rounded-sm bg-pink icon-small icon-badge close-icon">
                          <i className="fas fa-times text-white" aria-hidden="true"></i>
                        </span>
                        <span className="rounded-sm bg-pink icon-small icon-badge shopping-icon">
                          <i className="fas fa-shopping-basket text-white" aria-hidden="true"></i>
                          <span className="badge bg-warning">3</span>
                        </span>
                      </a>
                    </div>
                    <div className="dropdown-menu dropdown-menu-end">
                      <ul className="bg-white list-unstyled">
                        <li className="d-flex align-items-center">
                          <i className="fas fa-shopping-basket font-size-20 me-3" aria-hidden="true"></i>
                          <h3 className="text-capitalize font-weight-bold mb-0">3 items in your cart</h3>
                        </li>
                        <hr/>
                        <li>
                          <a href="product-single.html">
                            <div className="media">
                              <div className="image">
                                <img className="bg-light rounded-sm px-5 py-3 me-4" src="assets/img/products/product-sm.png" alt="cart-Image"/>
                              </div>
                              <div className="media-body">
                                <div className="d-flex justify-content-between">
                                  <h4 className="text-dark">Barbie Racing Car</h4>
                                  <span className="cancel">
                                    <i className="fas fa-times text-muted" aria-hidden="true"></i>
                                  </span>
                                </div>
                                <div className="price">
                                  <span className="text-primary font-weight-medium">$50</span>
                                </div>
                                <span className="text-muted font-weight-medium text-muted">Qnt: 1</span>
                              </div>
                            </div>
                          </a>
                          <hr/>
                        </li>
                        <li>
                          <a href="product-single.html">
                            <div className="media">
                              <div className="image">
                                <img className="bg-light rounded-sm px-5 py-3 me-4" src="assets/img/products/product-sm.png" alt="cart-Image"/>
                              </div>
                              <div className="media-body">
                                <div className="d-flex justify-content-between">
                                  <h4 className="text-dark">Barbie Racing Car</h4>
                                  <span className="cancel">
                                    <i className="fas fa-times text-muted" aria-hidden="true"></i>
                                  </span>
                                </div>
                                <div className="price">
                                  <span className="text-primary font-weight-medium">$50</span>
                                </div>
                                <span className="text-muted font-weight-medium">Qnt: 1</span>
                              </div>
                            </div>
                          </a>
                          <hr/>
                        </li>
                        <li>
                          <a href="product-single.html">
                            <div className="media">
                              <div className="image">
                                <img className="bg-light rounded-sm px-5 py-3 me-4" src="assets/img/products/product-sm.png" alt="cart-Image"/>
                              </div>
                              <div className="media-body">
                                <div className="d-flex justify-content-between">
                                  <h4 className="text-dark font-weight-bold">Barbie Racing Car</h4>
                                  <span className="cancel">
                                    <i className="fas fa-times text-muted" aria-hidden="true"></i>
                                  </span>
                                </div>
                                <div className="price">
                                  <span className="text-primary font-weight-medium">$50</span>
                                </div>
                                <span className="text-muted font-weight-medium">Qnt: 1</span>
                              </div>
                            </div>
                          </a>
                          <hr/>
                        </li>
                        <li>
                          <div className="d-flex justify-content-between mb-3">
                            <h3 className="cart-total font-weight-bold">Subtotal</h3>
                            <h3 className="cart-price font-weight-bold">$150</h3>
                          </div>
                          <div className="cart-button d-flex justify-content-between">
                            <button type="button" className="btn btn-danger text-uppercase px-4 shadow-sm me-3" onclick="location.href='product-checkout-step-1.html';">Checkout</button>
                            <button type="button" className="btn btn-danger text-uppercase px-4 shadow-sm" onclick="location.href='product-cart.html';">View
                              Cart</button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  )
}

export default TopBar