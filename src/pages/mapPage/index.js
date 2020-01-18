import React from 'react';
import { connect } from "react-redux";
import { MapContainer, AsideContainer } from './Containers';
import GetCurrentPosition from "../../utils/GetCurrentPosition";

const MapRecycle = ({ coords }) => {
  return (
    <>
      <GetCurrentPosition />
      {coords.lng !== 0 ? <MapContainer /> : ''}
      <AsideContainer />
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    coords: state.settings.coords
  }
}

export default connect(mapStateToProps)(MapRecycle)
