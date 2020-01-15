import React from 'react';
import { connect } from "react-redux";
import { GoogleMap, useLoadScript, LoadScript, MarkerClusterer, Marker } from '@react-google-maps/api'
import { Spinner } from "../index";
import PointCollectors from '../../assets/icons/ic_poi_organization.svg';
import PointClothes from '../../assets/icons/ic_poi_clothes.svg';


const MapContainer = ({ data, settings }) => {

  const { getLocations } = data
  const { coords } = settings
  const center = { lat: coords.lat, lng: coords.lng };
  //const apikey = process.env.REACT_APP_API_KEY_MAPS;
  const apikey = undefined;


  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apikey,
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
      zoom={12}
      center={center}>
      <MarkerClusterer
        options={undefined}
        styles={[
          {
            url: "/images/black_dot.png",
            height: 26,
            width: 26,
            fontFamily: "Rubik",
            textColor: "#FFF",
          },
          {
            url: "/images/black_dot.png",
            height: 35,
            width: 35,
            fontFamily: "Rubik",
            textColor: "#FFF",
          },
          {
            url: "/images/black_dot.png",
            height: 34,
            width: 34,
            fontFamily: "Rubik",
            textColor: "#FFF",
          },
          {
            url: "/images/black_dot.png",
            height: 40,
            width: 40,
            fontFamily: "Rubik",
            textColor: "#FFF",
          },
          {
            url: "/images/black_dot.png",
            height: 46,
            width: 46,
            fontFamily: "Rubik",
            textColor: "#FFF",
          }
        ]}
      >
        {
          (clusterer) => getLocations.map((location, i) => {
            console.log(location)
            const icon = location.category === "COLLECTOR" ? PointCollectors : PointClothes;

            return <Marker
              key={i}
              icon={icon}
              position={location}
              clusterer={clusterer}
            />
          })
        }
      </MarkerClusterer>
    </GoogleMap>
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <Spinner />
}


const mapStateToProps = state => ({
  settings: state.settings
})



export default connect(mapStateToProps)(MapContainer)