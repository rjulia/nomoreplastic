import React from 'react';
import { Title } from "../../../../components";
import './Card.scss';
const Card = ({ children, text, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className="card__image">
        {children}
      </div>
      <Title tag="p" text={text} classN="card__text" />
    </div>
  )
}

export default Card
