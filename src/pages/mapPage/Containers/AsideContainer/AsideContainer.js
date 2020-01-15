import React from 'react';
import './AsideContainer.js.scss';
import { SelectCollectionPoints, NewsAside, Search } from '../../components';

const AsideContainer = () => {
  return (
    <div className="aside">
      <Search />
      <SelectCollectionPoints />
      <NewsAside />
    </div>
  )
}

export default AsideContainer
