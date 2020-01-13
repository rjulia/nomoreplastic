import React from 'react';
import './ButtonMenu.scss'

const Button = ({ children, onClick, text }) => {

  return (
    <div
      className="ButtonMenu"
      onClick={onClick}>
      {children}
      <p> {text} </p>
    </div>
  )
}

export default Button