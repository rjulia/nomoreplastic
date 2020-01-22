import React from 'react'
import './Spinner.scss'

const Spinner = ({ className }) => {
  return (
    <div className={`spinner__container ${className}`}>
      <div className="lds-dual-ring"></div>
    </div>
  )
}

export default Spinner
