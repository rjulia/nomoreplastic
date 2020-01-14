import React from 'react';
import './ButtonMenu.scss'
import { FaAngleRight } from "react-icons/fa";



const Button = ({ children, onClick, text }) => {

  return (
    <div
      className="ButtonMenu"
      onClick={onClick}>
      <div className="icon__contianer">
        {children} <FaAngleRight />

      </div>
      <p> {text} </p>
    </div>
  )
}

export default Button