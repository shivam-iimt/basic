import React from 'react'

const index = () => {
let year = new Date().getFullYear();
  return (
    <footer className="footer-bg-img">
  <div className="color-bar">
    <div className="container-fluid">
      <div className="row">
        <div className="col color-bar bg-warning"></div>
        <div className="col color-bar bg-danger"></div>
        <div className="col color-bar bg-success"></div>
        <div className="col color-bar bg-info"></div>
        <div className="col color-bar bg-purple"></div>
        <div className="col color-bar bg-pink"></div>
        <div className="col color-bar bg-warning d-none d-md-block"></div>
        <div className="col color-bar bg-danger d-none d-md-block"></div>
        <div className="col color-bar bg-success d-none d-md-block"></div>
        <div className="col color-bar bg-info d-none d-md-block"></div>
        <div className="col color-bar bg-purple d-none d-md-block"></div>
        <div className="col color-bar bg-pink d-none d-md-block"></div>
      </div>
    </div>
  </div>

  <div className="pt-8 pb-7  bg-repeat" style={{backgroundImage: "url(assets/img/background/footer-bg-img-1.png)"}}>
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-lg-3 col-xs-12">
          <a className="mb-6 d-block" href="index.html">
            <img className="img-fluid d-inline-block w-50 lazyestload" data-src="assets/img/logo-footer.png" src="assets/img/logo-footer.png"/>
          </a>
          <p className="mb-6">Excepteur sint occaecat cupidatat non proident, sunt in culpa officia.Lorem ipsum dolor sit
            amet.</p>
          <p className="mb-6">consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.</p>
        </div>

        <div className="col-sm-6 col-lg-3 col-xs-12">
          <h4 className="section-title-sm font-weight-bold text-white mb-6">Useful Links</h4>
          <ul className="list-unstyled">
            <li className="mb-4">
              <a href="index.html">
                <i className="fas fa-angle-double-right me-2" aria-hidden="true"></i>Kidz School
              </a>
            </li>
            <li className="mb-4">
              <a href="about-us.html">
                <i className="fas fa-angle-double-right me-2" aria-hidden="true"></i>About Kidz School
              </a>
            </li>
            <li className="mb-4">
              <a href="index-v2.html">
                <i className="fas fa-angle-double-right me-2" aria-hidden="true"></i>Kidz Store
              </a>
            </li>
            <li className="mb-4">
              <a href="index-v3.html">
                <i className="fas fa-angle-double-right me-2" aria-hidden="true"></i>Kidz Daycare
              </a>
            </li>
            <li className="mb-3">
              <a href="photo-gallery.html">
                <i className="fas fa-angle-double-right me-2" aria-hidden="true"></i>
                Photo Gallery
              </a>
            </li>
          </ul>
        </div>

        <div className="col-sm-6 col-lg-3 col-xs-12">
          <h4 className="section-title-sm font-weight-bold text-white mb-6">Recent Post</h4>
          <ul className="list-unstyled list-item-border-bottom">
            <li className="mb-4 pb-4">
              <div className="media">
                <a className="me-2" href="blog-single-left-sidebar.html">
                  <img className="rounded-lg w-100 border-primary border-2 d-block" data-src="assets/img/blog/blog-sm-img5.jpg"
                    src="assets/img/blog/blog-sm-img5.jpg" alt="blog-sm-img5.jpg"/>
                </a>
                <div className="media-body">
                  <h5 className="line-hight-16 mb-1">
                    <a className="font-base font-size-14" href="blog-single-left-sidebar.html">A Clean Website Gives More Experience To The
                      Visitors</a>
                  </h5>
                  <time className="text-white">July 7 - 2020</time>
                </div>
              </div>
            </li>

            <li className="mb-4 pb-4">
              <div className="media">
                <a className="me-2" href="blog-single-left-sidebar.html">
                  <img className="rounded-lg w-100 border-success border-2 d-block" data-src="assets/img/blog/blog-sm-img-12.jpg"
                    src="assets/img/blog/blog-sm-img-12.jpg" alt="blog-sm-img-12.jpg"/>
                </a>
                <div className="media-body">
                  <h5 className="line-hight-16 mb-1">
                    <a className="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                      in voluptate.</a>
                  </h5>
                  <time className="text-white">Jun 7 - 2020</time>
                </div>
              </div>
            </li>

            <li className="mb-4 pb-4">
              <div className="media">
                <a className="me-2" href="blog-single-left-sidebar.html">
                  <img className="rounded-lg w-100 border-info border-2 d-block" data-src="assets/img/blog/blog-sm-img7.jpg"
                    src="assets/img/blog/blog-sm-img7.jpg" alt="blog-sm-img7.jpg"/>
                </a>
                <div className="media-body">
                  <h5 className="line-hight-16 mb-1">
                    <a className="font-base font-size-14" href="blog-single-left-sidebar.html">Duis aute irure dolor in reprehenderit
                      in voluptate.</a>
                  </h5>
                  <time className="text-white">Jun 7 - 2020</time>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="col-sm-6 col-lg-3 col-xs-12">
          <h4 className="section-title-sm font-weight-bold text-white mb-6">Mailing List</h4>
          <p className="mb-4">Sign up for our mailing list to get latest updates and offers.</p>
          <form className="mb-4" action="">
            <div className="input-group shadow-light rounded-sm input-addon">
              <input type="text" className="form-control" placeholder="Email address" aria-describedby="basic-addon21" required/>
                <button type="submit" className="btn input-group-text bg-danger">
                  <i className="fas fa-check text-white" aria-hidden="true"></i>
                </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div className="copyright">
    <div className="container">
      <div className="row py-4 align-items-center">
        <div className="col-sm-7 col-xs-12 order-1 order-md-0">
          <p className="copyright-text"> © <span id="copy-year">{year}</span> Copyright Kidz School Bootstrap Template by <a href="http://www.iamabdus.com/" target="_blank">Abdus.</a></p>
        </div>

        <div className="col-sm-5 col-xs-12">
          <ul className="list-inline d-flex align-items-center justify-content-md-end justify-content-center mb-md-0">
            <li className="me-3">
              <a className="icon-rounded-circle-small bg-primary" href="javascript:void(0)">
                <i className="fab fa-facebook-f text-white" aria-hidden="true"></i>
              </a>
            </li>
            <li className="me-3">
              <a className="icon-rounded-circle-small bg-success" href="javascript:void(0)">
                <i className="fab fa-twitter text-white" aria-hidden="true"></i>
              </a>
            </li>
            <li className="me-3">
              <a className="icon-rounded-circle-small bg-danger" href="javascript:void(0)">
                <i className="fab fa-google-plus-g text-white" aria-hidden="true"></i>
              </a>
            </li>
            <li className="me-3">
              <a className="icon-rounded-circle-small bg-info" href="javascript:void(0)">
                <i className="fab fa-pinterest-p text-white" aria-hidden="true"></i>
              </a>
            </li>
            <li className="">
              <a className="icon-rounded-circle-small bg-purple" href="javascript:void(0)">
                <i className="fab fa-vimeo-v text-white" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default index