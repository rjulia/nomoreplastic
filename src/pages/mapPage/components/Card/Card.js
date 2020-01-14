import React from 'react';
import { Title } from "../../../../components";
import './Card.scss';
const Card = ({ children, text }) => {
  return (
    <div className="card">
      <div className="card__image">
        {children}
      </div>
      <Title tag="p" text={text} classN="card__text" />
    </div>
  )
}

export default Card
