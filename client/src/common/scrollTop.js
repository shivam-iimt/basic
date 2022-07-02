import React from 'react'

const scrollTop = () => {
  return (
    <div className="">
      <a
        href="#pageTop"
        className="back-to-top"
        id="back-to-top"
        style="opacity: 1;"
      >
        <i className="fas fa-arrow-up" aria-hidden="true"></i>
      </a>
    </div>
  );
}

export default scrollTop