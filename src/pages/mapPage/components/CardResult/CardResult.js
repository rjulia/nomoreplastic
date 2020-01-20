import React, { useState } from 'react';
import { connect } from "react-redux";
import { Title, Paragraph } from "../../../../components";
import { getDistance } from "../../../../utils/DistanceMatrixService";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./CardResult.scss"

const CardResult = ({ item, coords }) => {

  const { address, name } = item;
  const [distance, setDistance] = useState('')
  getDistance(coords, { lat: item.lat, lng: item.lng }).then(data => {
    if (data.rows["0"]) setDistance(data.rows["0"].elements["0"].distance.text)
  })

  return (
    <div className="card-result">
      <Title tag="h3" text={name} classN="card-result__text" />
      <Paragraph text={address} tag="p" classN="card-result__parf" />
      <span className="card-result__distance"><FaMapMarkerAlt size="10" /> {distance}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  coords: state.settings.coords
})

export default connect(mapStateToProps)(CardResult) 
