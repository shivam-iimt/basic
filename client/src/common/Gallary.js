import React from 'react'

const Gallary = () => {
  return (
    <section className="pt-9 pb-7 py-md-10" id="gallery_home">
	<div className="container">
		<div className="section-title justify-content-center mb-4 mb-md-8 wow fadeInUp">
      <span className="shape shape-left bg-info"></span>
      <h2 className="text-danger">Our Gallery</h2>
      <span className="shape shape-right bg-info"></span>
    </div>

		<div className="d-flex justify-content-center wow fadeInUp">
      <div id="filters" className="button-group">
				<button className="button is-checked" data-filter="*">View All</button>
	      <button className="button" data-filter=".charity">Charity</button>
	      <button className="button" data-filter=".nature">Nature</button>
	      <button className="button" data-filter=".children">Children</button>
			</div>
    </div>

    <div id="gallery-grid">
			<div className="row grid wow fadeInUp">
				<div className="col-md-4 col-lg-3 col-xs-12 element-item nature">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
              <img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img1.jpg" src="assets/img/gallery/gallery-img1.jpg" alt="gallery-img"/>
							<a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img1.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
              </a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 col-xs-12 element-item charity">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
							<img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img2.jpg" src="assets/img/gallery/gallery-img2.jpg" alt="gallery-img"/>
							<a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img2.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
              </a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 col-xs-12 element-item children nature">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
							<img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img3.jpg" src="assets/img/gallery/gallery-img3.jpg" alt="gallery-img"/>
							<a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img3.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
              </a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 col-xs-12 element-item children charity">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
							<img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img4.jpg" src="assets/img/gallery/gallery-img4.jpg" alt="gallery-img"/>
							<a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img4.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
	            </a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 col-xs-12 element-item nature">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
							<img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img5.jpg" src="assets/img/gallery/gallery-img5.jpg" alt="gallery-img"/>
              <a className="media-img-overlay" data-fancybox="gallery"
              href="assets/img/gallery/gallery-lg-img5.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
	            </a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 col-xs-12 element-item children charity">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
							<img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img6.jpg" src="assets/img/gallery/gallery-img6.jpg" alt="gallery-img"/>
							<a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img6.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
	            </a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 col-xs-12 element-item children charity">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
							<img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img7.jpg" src="assets/img/gallery/gallery-img7.jpg" alt="gallery-img"/>
							<a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img7.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
	            </a>
						</div>
					</div>
				</div>

				<div className="col-md-4 col-lg-3 col-xs-12 element-item nature">
					<div className="media media-hoverable justify-content-center">
						<div className="position-relative w-100">
							<img className="media-img w-100 lazyestload" data-src="assets/img/gallery/gallery-img8.jpg" src="assets/img/gallery/gallery-img8.jpg" alt="gallery-img"/>
							<a className="media-img-overlay" data-fancybox="gallery" href="assets/img/gallery/gallery-lg-img8.jpg">
	              <div className="btn btn-squre">
									<i className="fas fa-search-plus"></i>
                </div>
	            </a>
						</div>
					</div>
				</div>
			</div>
    </div>

		<div className="btn-aria text-center mt-4 wow fadeInUp">
			<a href="photo-gallery.html" className="btn btn-danger text-uppercase box-shadow">View More</a>
		</div>
	</div>
</section>
  )
}

export default Gallary