import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { LOCATIONS_QUERY } from "../../../../services/apollo/queries";
import './MapContianer.scss';
import { MapGoogleApi, Spinner } from "../../../../components";

const MapContainer = () => {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY);
  if (loading) return <Spinner />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  return (
    <div className="map">
      <MapGoogleApi data={data} />
    </div>
  )
}

export default MapContainer
