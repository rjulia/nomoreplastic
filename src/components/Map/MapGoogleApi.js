import React from 'react';
import { connect } from "react-redux";
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import Icon from '../../assets/icons/pin.png'
// ...

export class MapContainer extends React.Component {
  onMarkerClick = () => {
    alert('hello')
  }
  render() {
    console.log(this.props)
    const {
      google,
      settings
    } = this.props;
    return (
      <Map
        google={this.props.google}
        initialCenter={{
          lat: settings.coords.lat,
          lng: settings.coords.lng
        }}
        zoom={14}
      >
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
const mapStateToProps = state => ({ settings: state.settings })



export default connect(mapStateToProps)(GoogleApiWrapper({
  apiKey: process.env.REACT_APP_API_KEY_MAPS
})(MapContainer))