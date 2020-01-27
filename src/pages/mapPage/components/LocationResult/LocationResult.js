import React from 'react'
import { connect } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { Spinner } from "../../../../components";

import { LOCATION_QUERY } from "../../../../services/apollo/queries";

const LocationResult = ({ id }) => {
  const { data, loading, error } = useQuery(LOCATION_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  const location = data.getLocation
  return (
    <div>
      {location.id}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    id: state.searchs.id,
  }
};

export default connect(mapStateToProps)(LocationResult)