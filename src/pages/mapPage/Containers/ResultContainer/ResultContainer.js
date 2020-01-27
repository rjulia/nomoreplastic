import React from 'react';
import { connect } from "react-redux";
import { cleanFilter } from "../../../../services/redux/actions/search.actions";

import { ButtonBack } from "../../../../components";
import { LocationResult } from '../../components';

const ResultContainer = ({ onCleanLocationFiltered, location }) => {

  const handelCloseFiltered = () => {
    onCleanLocationFiltered()
  }
  return (
    <div>
      <ButtonBack text="Go Back" onClick={handelCloseFiltered} />
      <LocationResult />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    location: state.searchs.location
  }
}

const mapDispatchToProps = dispatch => ({
  onCleanLocationFiltered: params => dispatch(cleanFilter(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer)