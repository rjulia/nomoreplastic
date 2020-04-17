import React from 'react'
import './shops.scss'
import { useQuery } from '@apollo/react-hooks';
import { Spinner } from "../../components";

import { SHOPS_QUERY } from "../../services/apollo/queries";
import CardShop from './components/CardShop/CardShop';

const ShopPage = () => {
  const { data, loading, error } = useQuery(SHOPS_QUERY);
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  return (
    <div className="shop__container">
      <div className="row">
        {
          data.getShops.map(shop => (
            <div key={shop.id} className="col-12 col-md-6">

              <CardShop shop={shop} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ShopPage
