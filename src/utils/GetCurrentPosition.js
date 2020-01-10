import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { getPosition } from "../services/redux/actions/settings.actions";
import { geolocated } from "react-geolocated";

const GetCurrentPosition = (props) => {

  const { onGetLocation } = props
  if (props.coords) {
    onGetLocation({ lat: props.coords.latitude, lng: props.coords.longitude })
  }

  return !props.isGeolocationAvailable ? (<div>Your browser does not support Geolocation</div>) :
    !props.isGeolocationEnabled ? (<div>Geolocation is not enabled</div>) :
      props.coords ? (<div></div>) : (
        <div>Getting the location data&hellip; </div>
      );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onGetLocation: params => dispatch(getPosition(params)),
  }
}

export default connect(null, mapDispatchToProps)(
  geolocated({
    positionOptions: {
      enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
  })(GetCurrentPosition))