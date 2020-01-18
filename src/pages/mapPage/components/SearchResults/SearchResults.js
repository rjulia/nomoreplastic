import React from 'react';
import { connect } from "react-redux";
import { Title } from "../../../../components";
import { CardResult, DropdownSearchResults } from "../index";
import { DistrictHK, TypeOfCollection } from "../../../../utils/constants";
import { cleanAndGetLocationFiltered } from "../../../../services/redux/actions/search.actions";
import './SearchResults.scss'





const SearchResults = ({ locations, onLoadLocationFiltered }) => {


  const handleSearchLocationByCategory = (params) => {
    if (params === "ALL") {
      onLoadLocationFiltered()
    } else {
      onLoadLocationFiltered({ category: params })
    }
  }

  const handleSearchLocationByDistric = (params) => {
    if (params === "ALL") {
      onLoadLocationFiltered()
    } else {
      onLoadLocationFiltered({ district: params })
    }
  }



  return (
    <div className="search-results">

      <Title tag="h2" text="Recycling Points" />
      <div className="search-results__filter--box">
        <DropdownSearchResults
          title="TYPE"
          list={TypeOfCollection}
          toggleItem={(item) => handleSearchLocationByCategory(item)}
        />
        <DropdownSearchResults
          title="Distric"
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

const mapDispatchToProps = dispatch => ({
  onLoadLocationFiltered: params => dispatch(cleanAndGetLocationFiltered(params))
})

export default connect(null, mapDispatchToProps)(SearchResults) 
