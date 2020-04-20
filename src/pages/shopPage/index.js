import React, { useState } from 'react';
import './shops.scss';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from "../../components";

import { SHOPS_QUERY } from "../../services/apollo/queries";
import { CardShop, CardDetailShop } from './components/';

const ShopPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [closed, setClosed] = useState('')
  const [ID, setId] = useState('')


  const onOpen = (id) => {
    if (id === ID || ID === "") {
      setClosed('closed')
      setIsOpen(!isOpen)
    }
    setId(id)
  }

  const onClose = () => {
    setIsOpen(false)
    setClosed('')
    setId('')
  }



  const { data, loading, error } = useQuery(SHOPS_QUERY);
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;

  return (
    <div className="shop__container">
      <div className="shop__title">
        <Title text={'Shop'} />
        <Paragraph
          tag='p'
          classN="contact__paragraph"
          text={'find'}
        />
      </div>
      <div className="row">

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
          {ID && <CardDetailShop id={ID} onClose={() => onClose()} />}
        </div>
      </div>
    </div>
  )
}

export default ShopPage
