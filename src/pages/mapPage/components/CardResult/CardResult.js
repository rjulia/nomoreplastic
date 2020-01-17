import React from 'react'
import { Title, Paragraph } from "../../../../components";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./CardResult.scss"

const CardResult = ({ item }) => {
  console.log(item)
  const { address, name } = item;
  return (
    <div className="card-result">
      <Title tag="h3" text={name} classN="card-result__text" />
      <Paragraph text={address} tag="p" classN="card-result__parf"/>
      <span className="card-result__distance"><FaMapMarkerAlt size="10"/> 600 m.</span>
    </div>
  )
}

export default CardResult
