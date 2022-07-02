import React from 'react'

const Blog = () => {
  return (
   <section className="pt-9 pb-7" id="blog">
  <div className="container">
    <div className="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
      <span className="shape shape-left bg-info"></span>
      <h2 className="text-danger">Latest News</h2>
      <span className="shape shape-right bg-info"></span>
    </div>

    <div className="row wow fadeInUp">
			<div className="col-md-4">
        <div className="card">
					<div className="position-relative">
	          <a href="blog-single-left-sidebar.html">
	            <img className="card-img-top lazyestload" data-src="assets/img/blog/blog-img1.jpg" src="assets/img/blog/blog-img1.jpg" alt="Card image"/>
						</a>
            <div className="card-img-overlay p-0">
              <span className="badge badge-rounded bg-primary m-4"> 10 <br/> July</span>
            </div>
					</div>

          <div className="card-body border-top-5 px-3 border-primary">
            <h3 className="card-title">
              <a className="text-primary text-capitalize d-block text-truncate" href="blog-single-left-sidebar.html">The standard chunk of Lorem.</a>
            </h3>
            <ul className="list-unstyled d-flex flex-md-column flex-lg-row">
              <li className="me-2">
								<a className="text-muted" href="blog-single-left-sidebar.html">
									<i className="fa fa-user me-2" aria-hidden="true"></i>Jone Doe
								</a>
              </li>
              <li className="me-2">
								<a className="text-muted" href="blog-single-left-sidebar.html">
									<i className="fas fa-comments me-2" aria-hidden="true"></i>4 Comments
								</a>
              </li>
            </ul>
            <p className="mb-2"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi cal Latin literature.</p>
            <a className="btn btn-link text-hover-warning ps-0" href="blog-single-left-sidebar.html">
              <i className="fas fa-angle-double-right me-1" aria-hidden="true"></i> Read More
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
					<div className="position-relative">
						<a href="blog-single-left-sidebar.html">
	            <img className="card-img-top lazyestload" data-src="assets/img/blog/blog-img2.jpg" src="assets/img/blog/blog-img2.jpg" alt="Card image"/>
						</a>
            <div className="card-img-overlay p-0">
              <span className="badge bg-success badge-rounded m-4"> 14 <br/> Jun</span>
            </div>
					</div>

          <div className="card-body border-top-5 px-3 border-success">
            <h3 className="card-title">
              <a className="text-success text-capitalize d-block text-truncate" href="blog-single-left-sidebar.html">Vestibulum congue massa vitae.</a>
            </h3>
						<ul className="list-unstyled d-flex flex-md-column flex-lg-row">
              <li className="me-2">
								<a className="text-muted" href="blog-single-left-sidebar.html">
									<i className="fa fa-user me-2" aria-hidden="true"></i>Jone Doe
								</a>
              </li>
              <li className="me-2">
								<a className="text-muted" href="blog-single-left-sidebar.html">
									<i className="fas fa-comments me-2" aria-hidden="true"></i>4 Comments
								</a>
              </li>
            </ul>
            <p className="mb-2"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi cal Latin literature.</p>
            <a className="btn btn-link text-hover-success ps-0" href="blog-single-left-sidebar.html">
              <i className="fas fa-angle-double-right me-1" aria-hidden="true"></i> Read More
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <div className="card">
					<div className="position-relative">
						<a href="blog-single-left-sidebar.html">
	            <img className="card-img-top lazyestload" data-src="assets/img/blog/blog-img3.jpg" src="assets/img/blog/blog-img3.jpg" alt="Card image"/>
						</a>
	          <div className="card-img-overlay p-0">
	            <span className="badge bg-danger badge-rounded m-4"> 14 <br/> Jun</span>
	          </div>
					</div>

          <div className="card-body border-top-5 px-3 border-danger">
            <h3 className="card-title">
              <a className="text-danger text-capitalize d-block text-truncate" href="blog-single-left-sidebar.html">Vestibulum congue massa vitae.</a>
            </h3>
						<ul className="list-unstyled d-flex flex-md-column flex-lg-row">
              <li className="me-2">
								<a className="text-muted" href="blog-single-left-sidebar.html">
									<i className="fa fa-user me-2" aria-hidden="true"></i>Jone Doe
								</a>
              </li>
              <li className="me-2">
								<a className="text-muted" href="blog-single-left-sidebar.html">
									<i className="fas fa-comments me-2" aria-hidden="true"></i>4 Comments
								</a>
              </li>
            </ul>
            <p className="mb-2"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classi cal Latin literature.</p>
            <a className="btn btn-link text-hover-danger ps-0" href="blog-single-left-sidebar.html">
              <i className="fas fa-angle-double-right me-1" aria-hidden="true"></i> Read More
            </a>
          </div>
        </div>
      </div>
    </div>

    <div className="btn-aria text-center mt-4 wow fadeInUp">
			<a href="blog-grid.html" className="btn btn-danger text-uppercase">View More</a>
		</div>
  </div>
</section>
  )
}

export default Blog