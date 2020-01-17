import React from 'react';
import { Title } from "../../../../components";
import { CardResult, DropdownSearchResults } from "../index";
import { DistrictHK, TypeOfCollection } from "../../../../utils/constants";
import './SearchResults.scss'





const SearchResults = ({ locations }) => {
  console.log(locations)

  function toggleSelected(item) {
    // let temp = this.state[key]
    // temp[id].selected = !temp[id].selected
    // this.setState({
    //   [key]: temp
    // })
  }

  return (
    <div className="search-results">

      <Title tag="h2" text="Recycling Points" />
      <div className="search-results__filter--box">
        <DropdownSearchResults
          title="TYPE"
          list={TypeOfCollection}
          toggleItem={(item) => toggleSelected(item)}
        />
        <DropdownSearchResults
          title="Distric"
          list={DistrictHK} />
      </div>
      <div className="search-result__results">
        {locations && locations.map(item => (

          <CardResult key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default SearchResults
