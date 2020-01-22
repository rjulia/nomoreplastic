import React from 'react';
import { connect } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { MapGoogleApi, Spinner } from "../../../../components";
import { LOCATIONS_QUERY } from "../../../../services/apollo/queries";
import { getLocations } from "../../../../services/redux/actions/search.actions";
import './MapContianer.scss';

const MapContainer = ({ search, onGetLocations }) => {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY, { variables: search });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  onGetLocations(data.getLocations)
  return (
    <div className="map">
      {data && <MapGoogleApi data={data.getLocations} />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    search: state.searchs.search,
  }
};

const mapDispatchToProps = dispatch => ({
  onGetLocations: params => dispatch(getLocations(params))
})


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapContainer);

