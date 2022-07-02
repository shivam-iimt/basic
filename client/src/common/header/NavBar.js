import React from 'react'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-scrollUp navbar-sticky navbar-white">
      <div className="container">
        <a className="navbar-brand" href="index.html">
          <img className="d-inline-block" src="assets/img/logo-school.png" alt="Kidz School"/>
        </a>

        <div className="dropdown cart-dropdown ms-auto me-5 d-md-none">
          <div className="cart-icon" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <a href="javascript:void(0)">
              <span className="rounded-sm bg-pink icon-small icon-badge close-icon">
                <i className="fas fa-times text-white" aria-hidden="true"></i>
              </span>
              <span className="rounded-sm bg-pink icon-small icon-badge shopping-icon">
                <i className="fa fa-shopping-basket text-white" aria-hidden="true"></i>
                <span className="badge bg-warning">3</span>
              </span>
            </a>
          </div>
          <div className="dropdown-menu dropdown-menu-end">
            <ul className="bg-white list-unstyled">
              <li className="d-flex align-items-center">
                <i className="fa fa-shopping-basket font-size-20 me-3" aria-hidden="true"></i>
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
        </div>

        <button className="navbar-toggler py-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent"
          aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fa fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item dropdown bg-primary">
              <a className="nav-link dropdown-toggle  active " href="javascript:void(0)"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-home nav-icon" aria-hidden="true"></i>
                <span>Home</span>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li>
                  <a className="dropdown-item  active " href="index.html">Kidz School</a>
                </li>
                <li>
                  <a className="dropdown-item " href="index-v2.html">Kidz Store</a>
                </li>
                <li>
                  <a className="dropdown-item " href="index-v3.html">Kidz Daycare</a>
                </li>
                <li>
                  <a className="dropdown-item " href="index-v4.html">Kidz Fashion</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown bg-danger">
              <a className="nav-link dropdown-toggle " href="javascript:void(0)" role="button"
                data-bs-toggle="dropdown">
                <i className="fas fa-list-ul nav-icon" aria-hidden="true"></i>
                <span>Pages</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item " href="about-us.html">About Us</a>
                </li>
                <li>
                  <a className="dropdown-item " href="javascript:void(0)">
                    Team <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </a>
                  <ul className="sub-menu">
                    <li><a className="" href="teachers.html">Teachers</a></li>
                    <li><a className="" href="teachers-details.html">Teachers
                        Details</a></li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item " href="testimonial.html">Testimonial</a>
                </li>
                <li>
                  <a className="dropdown-item
                   ||
                   ||
                  
                  "
                    href="javascript:void(0)">Events<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                  <ul className="sub-menu">
                    <li><a className=" " href="events.html">All Events</a></li>
                    <li>
                      <a className="" href="event-single-left-sidebar.html">Events
                        Left Sidebar</a>
                    </li>
                    <li>
                      <a className="" href="event-single-right-sidebar.html">Events
                        Right Sidebar</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item " href="photo-gallery.html">Photo
                    Gallery</a>
                </li>
                <li>
                  <a className="dropdown-item " href="pricing-table.html">Pricing
                    Table</a>
                </li>
                <li>
                  <a className="dropdown-item " href="services.html">Services</a>
                </li>
                <li>
                  <a className="dropdown-item " href="services-details.html">Services
                    Details</a>
                </li>
                <li>
                  <a className="dropdown-item " href="search-result.html">Search
                    Result</a>
                </li>
                <li>
                  <a className="dropdown-item " href="contact-us.html">Contact Us</a>
                </li>
                <li>
                  <a className="dropdown-item " href="faq.html">FAQ</a>
                </li>
                <li>
                  <a className="dropdown-item " href="sign-up-or-login.html">Sign
                    Up / Login</a>
                </li>
                <li>
                  <a className="dropdown-item " href="404.html">Error 404</a>
                </li>
                <li>
                  <a className="dropdown-item" href="coming-soon.html">Coming Soon</a>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown mega-dropdown bg-success">
              <a className="nav-link dropdown-toggle " href="#" role="button"
                data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="far fa-file-alt nav-icon" aria-hidden="true"></i>
                <span>Courses</span>
              </a>
              <div className="dropdown-menu row">
                <div className="col-12 col-md-3">
                  <ul className="list-unstyled">
                    <li>Courses Grid</li>
                    <li><a className="" href="courses-grid-full.html">Courses
                        Grid Fullwidth</a></li>
                    <li><a className="" href="courses-grid-left-sidebar.html">Courses
                        Grid Left Sidebar</a></li>
                    <li><a className="" href="courses-grid-right-sidebar.html">Courses
                        Grid Right Sidebar</a></li>
                  </ul>
                </div>

                <div className="col-12 col-md-3">
                  <ul className="list-unstyled">
                    <li>Courses List</li>
                    <li><a className="" href="course-list-fullwidth.html">Courses
                        List Fullwidth</a></li>
                    <li><a className="" href="course-list-left-sidebar.html">Courses
                        List left Sidebar</a></li>
                    <li><a className="" href="course-list-right-sidebar.html">Courses
                        List Right Sidebar</a></li>
                  </ul>
                </div>

                <div className="col-12 col-md-3">
                  <ul className="list-unstyled">
                    <li>Single Course</li>
                    <li><a className="" href="course-single.html">Single Course
                        Fullwidth</a></li>
                    <li><a className="" href="course-single-left-sidebar.html">Single
                        Course left Sidebar</a></li>
                    <li><a className="" href="course-single-right-sidebar.html">Single
                        Course Right Sidebar</a></li>
                  </ul>
                </div>

                <div className="col-12 col-md-3">
                  <ul className="list-unstyled">
                    <li>Checkout</li>
                    <li><a className="" href="product-checkout-step-1.html">Personal
                        Info</a></li>
                    <li><a className="" href="product-checkout-step-2.html">Payment
                        Info</a></li>
                    <li><a className="" href="product-checkout-step-3.html">Confirmation</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="nav-item dropdown bg-info">
              <a className="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fas fa-edit nav-icon" aria-hidden="true"></i>
                <span>Store</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="stores">
                <li>
                  <a className="dropdown-item
                   ||
                   ||
                  

                  "
                    href="javascript:void(0)">Products<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                  <ul className="sub-menu">
                    <li><a className="" href="products.html">Products Fullwidth</a></li>
                    <li><a className="" href="product-left-sidebar.html">Products
                        Left Sidebar</a></li>
                    <li><a className="" href="product-right-sidebar.html">Products
                        Right Sidebar</a></li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item " href="product-single.html">Single
                    Product</a>
                </li>
                <li>
                  <a className="dropdown-item " href="product-category.html">Product
                    Categories</a>
                </li>
                <li>
                  <a className="dropdown-item " href="product-cart.html">Cart</a>
                </li>
                <li>
                  <a className="dropdown-item
                     ||
                     ||
                    
                    "
                    href="javascript:void(0)">Checkout<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                  <ul className="sub-menu">
                    <li>
                      <a className="" href="product-checkout-step-1.html">Personal
                        Info</a>
                    </li>
                    <li>
                      <a className="" href="product-checkout-step-2.html">Payment
                        Info</a>
                    </li>
                    <li>
                      <a className="" href="product-checkout-step-3.html">Confirmation</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown bg-purple">
              <a className="nav-link dropdown-toggle " href="javascript:void(0)" id="stores"
                role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="far fa-calendar-alt nav-icon" aria-hidden="true"></i>
                <span>Blog</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="stores">
                <li>
                  <a className="dropdown-item
                     ||
                     ||
                    
                  "
                    href="javascript:void(0)">Blog Grid<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                  <ul className="sub-menu">
                    <li><a className="" href="blog-grid.html">Blog Grid Fullwidth</a></li>
                    <li><a className="" href="blog-grid-left-sidebar.html">Blog
                        Grid Left Sidebar</a></li>
                    <li><a className="" href="blog-grid-right-sidebar.html">Blog
                        Grid Right Sidebar</a></li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item
                     ||
                     ||
                    "
                    href="javascript:void(0)">Blog List<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                  <ul className="sub-menu">
                    <li><a className="" href="blog-list.html">Blog List Fullwidth</a></li>
                    <li><a className="" href="blog-list-left-sidebar.html">Blog
                        List Left Sidebar</a></li>
                    <li><a className="" href="blog-list-right-sidebar.html">Blog
                        List Right Sidebar</a></li>
                  </ul>
                </li>
                <li>
                  <a className="dropdown-item
                     ||
                     ||
                    
                  "
                    href="javascript:void(0)">Single Blog<i className="fa fa-chevron-right" aria-hidden="true"></i></a>
                  <ul className="sub-menu">
                    <li><a className="" href="blog-single.html">Blog Single
                        Fullwidth</a></li>
                    <li><a className="" href="blog-single-left-sidebar.html">Blog
                        Single Left Sidebar</a></li>
                    <li><a className="" href="blog-single-right-sidebar.html">Blog
                        Single Right Sidebar</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown bg-pink">
              <a className="nav-link dropdown-toggle " href="component-default.html">
                <i className="far fa-folder nav-icon" aria-hidden="true"></i>
                <span>components</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar