import React, { useState } from 'react';
import './shops.scss';
import { useQuery } from '@apollo/react-hooks';
import { Spinner } from "../../components";
import classNames from 'classnames';

import { SHOPS_QUERY } from "../../services/apollo/queries";
import { CardShop, CardDetailShop } from './components/';

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [closed, setClosed] = useState('')
  const [ID, setId] = useState('')


  const onOpen = (id) => {
    // if (id === ID) {
    //   setClosed('closed')
    //   setIsOpen(!isOpen)
    // }
    setId(id)
  }



  const { data, loading, error } = useQuery(SHOPS_QUERY);
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;

  return (
    <div className="shop__container">
      <div className={!isOpen ? `row myrow ${closed}` : 'row myrow open'}>
        {
          data.getShops.map(shop => (
            <div key={shop.id} className="column">
              <CardShop shop={shop} open={(id) => onOpen(id)} />
            </div>
          ))
        }
      </div>
      <div className={!isOpen ? `aside ${closed}` : 'aside open'}>
        <CardDetailShop id={ID} />
      </div>
    </div>
  )
}

export default ShopPage
