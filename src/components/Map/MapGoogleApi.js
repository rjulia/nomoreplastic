import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Icon from '../../assets/icons/pin.png'
// ...

export class MapContainer extends React.Component {

  onMarkerClick = () => {
    alert('hello')
  }
  render() {
    const {
      map,
      google
    } = this.props;
    return (
      <Map

        google={this.props.google}

        initialCenter={{
          lat: 22.3693236,
          lng: 114.0405858
        }}
        zoom={12}
      >

        {/* <Marker onClick={this.onMarkerClick}
          name={'Current location'} /> */}
        <Marker
          name={'Your position'}
          position={{ lat: 22.4564467, lng: 114.0043653 }}
          onClick={this.onMarkerClick}
          icon={{
            url: Icon,
            scaledSize: new google.maps.Size(32, 32)
          }} />
      </Map>
    );
  }

}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_MAPS
})(MapContainer)