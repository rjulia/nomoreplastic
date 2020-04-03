import React from 'react';
import { connect } from "react-redux";
import './AsideContainer.js.scss';
import { SelectCollectionPoints, NewsAside, Search } from '../../components';
import ResultsConatiner from "../ResultsContainer/ResultsContainer";
import ResultContainer from "../ResultContainer/ResultContainer";

const AsideContainer = ({ isOnSearching, id }) => {
  return (
    <div className="aside">
      <div className="aside__container">
        {!id && <Search />}
        {id && <ResultContainer />}
        {(!isOnSearching && !id) && <SelectCollectionPoints />}
        {(!isOnSearching && !id) && <NewsAside />}
        {(isOnSearching && !id) && <ResultsConatiner />}
      </div>
      <div className="aside__mask"></div>
    </div>
  )
}


const mapStateToProps = state => ({
  isOnSearching: state.searchs.isOnSearching,
  id: state.searchs.id
})

export default connect(mapStateToProps)(AsideContainer)
