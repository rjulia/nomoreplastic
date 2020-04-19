import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import './CardDetailShop.scss';
import { Spinner, BoxImage } from "../../../../components";
import { SHOP_QUERY } from "../../../../services/apollo/queries";



const CardDetailShop = ({ id }) => {
  const { data, loading, error } = useQuery(SHOP_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  const { address, category, description, email, facebbok, imageUrl, name, plasticfreen, promoded, rate, webUrl } = data.getShop
  return (
    <div className="card-detail-shop__container">
      <BoxImage img={imageUrl} height={300} />
    </div>
  )
}

export default CardDetailShop
