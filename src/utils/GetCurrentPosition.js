import React from 'react';
import { connect } from "react-redux";
import { getPosition } from "../services/redux/actions/settings.actions";
import { geolocated } from "react-geolocated";
import styled from 'styled-components';

const Wrapper = styled('div')`
  width:60vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`



const GetCurrentPosition = (props) => {

  const { onGetLocation } = props
  if (props.coords) {
    onGetLocation({ lat: props.coords.latitude, lng: props.coords.longitude })
  }

  return !props.isGeolocationAvailable ? (<div>Your browser does not support Geolocation</div>) :
    !props.isGeolocationEnabled ? (<div>Geolocation is not enabled</div>) :
      props.coords ? (<div></div>) : (
        <Wrapper><p>Getting the location data&hellip;</p></Wrapper>
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