import React from 'react';
import { connect } from "react-redux";
import './AsideContainer.js.scss';
import { SelectCollectionPoints, NewsAside, Search } from '../../components';
import ResultConatiner from "../ResultConatiner/ResultContainer";

const AsideContainer = ({ isOnSearching }) => {
  console.log(isOnSearching)
  return (
    <div className="aside">
      <div className="aside__container">
        <Search />
        {!isOnSearching && <SelectCollectionPoints />}
        {!isOnSearching && <NewsAside />}
        {isOnSearching && <ResultConatiner />}
      </div>
      <div className="aside__mask"></div>
    </div>
  )
}


const mapStateToProps = state => ({
  isOnSearching: state.searchs.isOnSearching
})

export default connect(mapStateToProps)(AsideContainer)
