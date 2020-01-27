import React from 'react';
import { connect } from "react-redux";
import { Title } from "../../../../components";
import { CardResult, DropdownSearchResults } from "../index";
import { DistrictHK, TypeOfCollection } from "../../../../utils/constants";
import { cleanAndGetLocationFiltered } from "../../../../services/redux/actions/search.actions";
import { getPosition } from "../../../../services/redux/actions/settings.actions";

import './SearchResults.scss'


const SearchResults = ({ locations, onLoadLocationFiltered, searchs, onGetPosition }) => {


  const handleSearchLocationByCategory = (params) => {
    if (params === "ALL") {
      onLoadLocationFiltered({ category: null })
    } else {
      onLoadLocationFiltered({ category: params })
    }
  }

  const handleSearchLocationByDistric = (params) => {
    if (params.name === "ALL") {
      onLoadLocationFiltered()
    } else {
      onLoadLocationFiltered({ district: params.name })
      onGetPosition(params.coords)
    }
  }



  return (
    <div className="search-results">

      <Title tag="h2" text="Recycling Points" />
      <div className="search-results__filter--box">
        <DropdownSearchResults
          title="TYPE"
          selectTitle={searchs.search.category}
          list={TypeOfCollection}
          toggleItem={(item) => handleSearchLocationByCategory(item)}
        />
        <DropdownSearchResults
          title="District"
          selectTitle={searchs.search.district}
          list={DistrictHK}
          toggleItem={(item) => handleSearchLocationByDistric(item)} />
      </div>
      <div className="search-result__results">
        {locations && locations.map(item => (

          <CardResult key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    searchs: state.searchs,
  }
};

const mapDispatchToProps = dispatch => ({
  onLoadLocationFiltered: params => dispatch(cleanAndGetLocationFiltered(params)),
  onGetPosition: params => dispatch(getPosition(params))

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults) 
