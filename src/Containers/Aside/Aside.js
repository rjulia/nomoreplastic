import React from 'react';
import './Aside.scss';
import Img from '../../assets/images/waste.jpg'

const Aside = () => {
  return (
    <div className="aside">
      <div className="aside__img">
        <h2>Yuen Long Community Green Station</h2>
        <img src={Img} alt="Title" />
      </div>

    </div>
  )
}

export default Aside
