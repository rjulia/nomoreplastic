import React from 'react';
import './AsideContainer.js.scss';
import { SelectCollectionPoints, NewsAside, Search } from '../../components';

const AsideContainer = () => {
  return (
    <div className="aside">
      <div className="aside__container">

        <Search />
        <SelectCollectionPoints />
        <NewsAside />
      </div>

      <div className="aside__mask"></div>
    </div>
  )
}

export default AsideContainer
