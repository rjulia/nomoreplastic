import React from 'react';
import { connect } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { MapGoogleApi, Spinner } from "../../../../components";
import { LOCATIONS_QUERY } from "../../../../services/apollo/queries";
import { getLocations } from "../../../../services/redux/actions/search.actions";
import './MapContianer.scss';

const MapContainer = ({ search, onGetLocations, coords }) => {

  function distance(lat1, lon1, lat2, lon2, unit) {
    if ((lat1 === lat2) && (lon1 === lon2)) {
      return 0;
    }
    else {
      var radlat1 = Math.PI * lat1 / 180;
      var radlat2 = Math.PI * lat2 / 180;
      var theta = lon1 - lon2;
      var radtheta = Math.PI * theta / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
      if (dist > 1) {
        dist = 1;
      }
      dist = Math.acos(dist);
      dist = dist * 180 / Math.PI;
      dist = dist * 60 * 1.1515;
      if (unit === "K") { dist = dist * 1.609344 }
      if (unit === "N") { dist = dist * 0.8684 }
      return dist;
    }
  }

  const { data, loading, error } = useQuery(LOCATIONS_QUERY, { variables: search });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;

  const sortDataBydistance = data.getLocations.map(location => {
    const dist = distance(coords.lat, coords.lng, location.lat, location.lng, "K")
    return {
      ...location,
      dist: dist
    }

  }).sort(function (a, b) { return a.dist - b.dist })
  onGetLocations(sortDataBydistance)

  return (
    <div className="map">
      {data && <MapGoogleApi data={sortDataBydistance} />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    search: state.searchs.search,
    coords: state.settings.coords
  }
};

const mapDispatchToProps = dispatch => ({
  onGetLocations: params => dispatch(getLocations(params))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

