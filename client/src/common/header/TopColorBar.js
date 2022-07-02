import React from 'react'

const TopColorBar = () => {
  return (
    <div className="color-bars">
      <div className="container-fluid">
        <div className="row">
          <div className="col color-bar bg-warning d-none d-md-block"></div>
          <div className="col color-bar bg-success d-none d-md-block"></div>
          <div className="col color-bar bg-danger d-none d-md-block"></div>
          <div className="col color-bar bg-info d-none d-md-block"></div>
          <div className="col color-bar bg-purple d-none d-md-block"></div>
          <div className="col color-bar bg-pink d-none d-md-block"></div>
          <div className="col color-bar bg-warning"></div>
          <div className="col color-bar bg-success"></div>
          <div className="col color-bar bg-danger"></div>
          <div className="col color-bar bg-info"></div>
          <div className="col color-bar bg-purple"></div>
          <div className="col color-bar bg-pink"></div>
        </div>
      </div>
    </div>
  );
}

export default TopColorBar