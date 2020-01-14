import React from 'react';
import './MapAside.scss';
import Search from "../Search/Search";
import SelectCollectionPoints from '../SelectCollectionPoints/SelectCollectionPoints'
const Aside = () => {
  return (
    <div className="aside">
      <Search />
      <SelectCollectionPoints />
    </div>
  )
}

export default Aside
