import React from 'react'

const loginModal = () => {
  return (
    <div className="modal fade" id="modal-login" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-sm" role="document">
    <div className="modal-content">
      <div className="bg-warning rounded-top p-2">
        <h3 className="text-white font-weight-bold mb-0 ms-2">Login</h3>
      </div>

      <div className="rounded-bottom-md border-top-0">
        <div className="p-3">
          <form action="#" method="POST" role="form">
            <div className="form-group form-group-icon">
              <input type="text" className="form-control border" placeholder="User name" required=""/>
            </div>

            <div className="form-group form-group-icon">
              <input type="password" className="form-control border" placeholder="Password" required=""/>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-danger text-uppercase w-100">Log In</button>
            </div>

            <div className="form-group text-center text-secondary mb-0">
              <a className="text-danger" href="javascript:void(0)">Forgot password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default loginModal