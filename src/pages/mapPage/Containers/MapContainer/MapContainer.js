import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { MapGoogleApi, Spinner } from "../../../../components";
import { LOCATIONS_QUERY } from "../../../../services/apollo/queries";
import './MapContianer.scss';

const MapContainer = ({ search }) => {
  console.log(search)
  const { data, loading, error } = useQuery(LOCATIONS_QUERY, { variables: search });
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
  return (
    <div className="map">
      {data && <MapGoogleApi data={data.getLocations} />}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    search: state.locations.search,
  }
};


export default connect(
  mapStateToProps
)(MapContainer);

