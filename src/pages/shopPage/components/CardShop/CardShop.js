import React from 'react'
import { Title } from '../../../../components'
import { Leaf, EmailIcon } from '../../../../assets/icons'
import './CardShop.scss';
import ShopPage from '../..';

const CardShop = ({ shop }) => {
  const leafs = Array.from({ length: shop.plasticfree }, (v, i) => i);

  return (
    <div className="card-shop__container">
      <div className="card-shop__box--image">
        <div className="card-shop__image">

          <img src={shop.imageUrl || ''} alt="" />
        </div>
      </div>
      <div className="card-shop__box--text">
        <div>

          <Title tag={'h2'} text={shop.name || ''} />
          <p>No plastic</p>
          <p className="card-shop__start">{leafs.map(leaf =>
            <Leaf fill={'#94aa2a'} key={leaf} width={25} />)}
          </p>
        </div>
        <div>
          <EmailIcon width={35} />
        </div>
        <div>

          {
            shop.category.map(catg => <p className="card-shop__category" key={catg}>{catg}</p>)
          }
        </div>

      </div>
    </div>
  )
}

export default CardShop
