import React, { useState } from 'react';
import { connect } from "react-redux";
import { Title, Paragraph } from "../../../../components";
import { getDistance } from "../../../../utils/DistanceMatrixService";
import { FaMapMarkerAlt } from "react-icons/fa";
import { getLocation } from "../../../../services/redux/actions/search.actions";
import { getPosition } from "../../../../services/redux/actions/settings.actions";
import "./CardResult.scss"

const CardResult = ({ item, coords, getIdLocation, onGetLocation }) => {
  const { address, name } = item;
  const [distance, setDistance] = useState('');

  if (coords && item.lat && item.lng) {
    getDistance(coords, { lat: item.lat, lng: item.lng }).then(data => {
      if (data && data.rows["0"]) {
        const distance = data.rows["0"].elements["0"].distance.text || 'no distance';
        setDistance(distance)
      }
    })
  }

  return (
    <div className={`card-result`}>
      <Title
        tag="h3"
        text={name}
        size={16}
        sizeM={16}
        classN="card-result__title"
        onClick={() => {
          getIdLocation(item.id)
          onGetLocation({
            lat: item.lat,
            lng: item.lng,
            zoom: 15
          })
        }} />
      <Paragraph text={address} tag="p" classN="card-result__parf" />
      <span className="card-result__distance"><FaMapMarkerAlt size="10" /> {distance}</span>
    </div>
  )
}

const mapStateToProps = state => ({
  coords: state.settings.coords
})

const mapDispatchToProps = dispatch => ({
  getIdLocation: id => dispatch(getLocation(id)),
  onGetLocation: params => dispatch(getPosition(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardResult) 
