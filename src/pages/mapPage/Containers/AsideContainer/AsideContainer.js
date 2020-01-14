import React from 'react';
import './AsideContainer.js.scss';
import Search from "../../components/Search/Search";
import SelectCollectionPoints from '../../components/SelectCollectionPoints/SelectCollectionPoints';
const AsideContainer = () => {
  return (
    <div className="aside">
      <Search />
      <SelectCollectionPoints />
    </div>
  )
}

export default AsideContainer
