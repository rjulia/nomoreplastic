import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { searchAllLocations } from "../../../../services/redux/actions/search.actions";
import './MapContianer.scss';
import { MapGoogleApi, Spinner } from "../../../../components";

const MapContainer = ({ onSearchLocations, locations, locationsLoading }) => {

  onSearchLocations()
  return (
    <div className="map">
      {locationsLoading && <Spinner />}
      {locations && <MapGoogleApi data={locations} />}
    </div>
  )
}

const mapStateToProps = state => {

  return {
    locations: state.locations.locations,
    locationsLoading: state.locations.locationsLoading,
  }
};

const mapDispatchToProps = dispatch => ({
  onSearchLocations: params => dispatch(searchAllLocations())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

