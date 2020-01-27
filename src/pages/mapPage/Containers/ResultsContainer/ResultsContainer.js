import React from 'react';
import { connect } from "react-redux";
import { cleanFilter } from "../../../../services/redux/actions/search.actions";
import { SearchResults } from "../../components";
import { ButtonBack } from "../../../../components";

const ResultsContainer = ({ onCleanLocationFiltered, locations }) => {

  const handelCloseFiltered = () => {
    onCleanLocationFiltered()
  }
  return (
    <div>
      <ButtonBack text="Go Back" onClick={handelCloseFiltered} />
      <SearchResults locations={locations} />
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    locations: state.searchs.locations
  }
}

const mapDispatchToProps = dispatch => ({
  onCleanLocationFiltered: params => dispatch(cleanFilter(params))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer)