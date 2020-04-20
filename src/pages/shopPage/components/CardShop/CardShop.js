import React from 'react'
import { Title, BoxImage, Label } from '../../../../components'
import './CardShop.scss';
import { FaRegEnvelope, FaLeaf, FaFacebookF, FaInstagram, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import variables from '../../../../scss/variables.scss';

const CardShop = ({ shop, open }) => {
  const leafs = [0, 1, 2, 3, 4];


  return (
    <div className="card-shop__container">
      <Title tag={'h2'} text={shop.name || ''} />
      <div className="card-shop__content">
        <div className="card-shop__box--image" onClick={() => open(shop.id)}>
          <BoxImage img={shop.thumbnail} height={180} />

        </div>
        <div className="card-shop__box--text">
          <div>
            <p className="card-shop__qualification">No More Waste Plastic Qualification</p>
            <p className="card-shop__start">{leafs.map(leaf =>
              <FaLeaf fill={shop.plasticfree >= leaf + 1 ? variables.primary : variables.smoke} key={leaf} size={18} />)}
            </p>
          </div>
          <p className="card-shop__address"><FaMapMarkerAlt size="10" /> {shop.address}</p>
          {shop.phone && <p className="card-shop__phone"><FaMobileAlt size="10" /> {shop.phone}</p>}
          <div className="card-shop__box--links">
            {shop.facebook && <a href={shop.facebook} target="_blank" rel="noopener noreferrer"><FaFacebookF size={20} /></a>}
            {shop.instagram && <a href={shop.instagram} target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>}
            {shop.webUrl && <a href={shop.webUrl} target="_blank" rel="noopener noreferrer"><IoIosGlobe size={20} /></a>}
            {shop.email && <a href={`mailto:${shop.email}`}><FaRegEnvelope size={20} /></a>}
          </div>
          <div>
            {
              shop.category.map(catg =>
                <Label
                  key={catg}
                  color={variables.white}
                  bgc={variables.primary}
                  text={catg}
                />
              )
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardShop
