import React from 'react'

const PreLoader = () => {
  return (
    <div id="preloader" className="smooth-loader-wrapper">
      <div className="smooth-loader">
        <div className="loader">
          <span className="dot dot-1"></span>
          <span className="dot dot-2"></span>
          <span className="dot dot-3"></span>
          <span className="dot dot-4"></span>
        </div>
      </div>
    </div>
  );
}

export default PreLoader