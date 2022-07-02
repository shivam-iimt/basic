import React from 'react'

const enrollModal = () => {
  return (
    <div className="modal fade" id="modal-enrolAccount" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true">
  <div className="modal-dialog modal-sm rounded" role="document">
    <div className="modal-content">
      <div className="bg-pink rounded-top p-2">
        <h3 className="text-white font-weight-bold mb-0 ms-2">Create An Account</h3>
      </div>

      <div className="rounded-bottom-md border-top-0">
        <div className="p-3">
          <form action="#" method="POST" role="form">
            <div className="form-group form-group-icon">
              <input type="text" className="form-control border" placeholder="Name" required=""/>
            </div>

            <div className="form-group form-group-icon">
              <input type="text" className="form-control border" placeholder="User name" required=""/>
            </div>

            <div className="form-group form-group-icon">
              <input type="text" className="form-control border" placeholder="Phone" required=""/>
            </div>

            <div className="form-group form-group-icon">
              <input type="password" className="form-control border" placeholder="Password" required=""/>
            </div>

            <div className="form-group form-group-icon">
              <input type="password" className="form-control border" placeholder="Re-Password" required=""/>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-pink text-uppercase text-white w-100">Register</button>
            </div>

            <div className="form-group text-center text-secondary mb-0">
              <p className="mb-0">Allready have an account? <a className="text-pink" href="javascript:void(0)">Log in</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default enrollModal