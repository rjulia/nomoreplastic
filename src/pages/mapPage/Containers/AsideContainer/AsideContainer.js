import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import './AsideContainer.js.scss';
import { SelectCollectionPoints, NewsAside, Search } from '../../components';
import ResultsConatiner from "../ResultsContainer/ResultsContainer";
import ResultContainer from "../ResultContainer/ResultContainer";
import { Title, Paragraph } from '../../../../components';
import variables from '../../../../scss/variables.scss';

const AsideContainer = ({ isOnSearching, id, id_event }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  useEffect(() => {
    if (id || id_event) {
      setIsDetailOpen(true)
    } else {
      setIsDetailOpen(false)
    }
  }, [id, id_event])
  return (
    <div className="aside">
      <Title color={variables.primary} size={28} tag={"h2"} text={"Nomorewaste.today"} />
      <Paragraph tag="p" size={"12"} text={"Select one of the Recycling Points above, or us the search to find want you need to reclycle"} />
      <div className="aside__container">
        {!isDetailOpen && <Search />}
        {(id || id_event) && <ResultContainer />}
        {(!isOnSearching && !isDetailOpen) && <SelectCollectionPoints />}
        {(!isOnSearching && !isDetailOpen) && <NewsAside />}
        {(isOnSearching && !isDetailOpen) && <ResultsConatiner />}
      </div>
      <div className="aside__mask"></div>
    </div>
  )
}


const mapStateToProps = state => ({
  isOnSearching: state.searchs.isOnSearching,
  id: state.searchs.id,
  id_event: state.searchs.id_event
})

export default connect(mapStateToProps)(AsideContainer)
