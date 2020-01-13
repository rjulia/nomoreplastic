import React from 'react';
import './MapContianer.scss';
import { MapGoogleApi } from "../../../../components";
const Map = () => {
  return (
    <div className="map">
      <MapGoogleApi />
    </div>
  )
}

export default Map
