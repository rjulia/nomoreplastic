import React from 'react';
import { connect } from "react-redux";
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { Spinner } from "../index";


const MapContainer = ({ data }) => {

  const center = { lat: -28.024, lng: 140.887 };
  const options = {
    imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_API_KEY_MAPS,
    language: 'en'
  })

  const renderMap = () => {
    const onLoad = undefined

    return <GoogleMap
      id="main-map"
      options={null}
      onLoad={onLoad}
      mapContainerStyle={{
        height: "auto",
        width: "100%"
      }}
      zoom={7}
      center={{
        lat: -3.745,
        lng: -38
      }}>
      {
        // ...Your map components
      }
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <Spinner />
}

export default connect()(MapContainer)