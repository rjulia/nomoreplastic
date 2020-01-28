import React from 'react'
import { connect } from "react-redux";
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from "../../../../components";
import { LOCATION_QUERY } from "../../../../services/apollo/queries";
import './locationResult.scss';
import envoiramnet from "../../../../assets/images/envoiramnet.jpg";
import { FaCheck } from "react-icons/fa";


const LocationResult = ({ id }) => {
  const { data, loading, error } = useQuery(LOCATION_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  const location = data.getLocation;
  const img = location.imageUrl || envoiramnet;

  return (
    <div className="location-result">

      <div className="location-result__image">
        <div className="location-result__boximage">

          <img src={img} alt={location.name} />
        </div>
      </div>
      <div className="location-result__boxtext">

        <Paragraph classN={`${location.category} location-result__location`} text={location.category} />
        <Title tag="h2" text={location.name} />
        <Paragraph classN="location-result__description" text={location.content__en} />
        <Paragraph classN="location-result__address" text={location.address} />
        <Paragraph tag="a" classN="location-result__link-web" href={location.webUrl || location.facebook} text={location.webUrl || location.facebook} />
        <Title tag="h3" classN={`${location.category} location-result__subtitle`} text="What we recycle" />
        <ul className="location-result__list">
          {location.recycleBy.map(type => (
            <li className={`${location.category} location-result__item`}>
              <FaCheck size="12px" />
              <Paragraph tag="span" key={type} text={type} />
            </li>
          ))}
        </ul>
        <Title tag="h3" classN={`${location.category} location-result__subtitle `} text="Contant Details" />
        <Paragraph classN="location-result__contact-name" text={location.conact_name} />
        <Paragraph classN="location-result__tel" text={location.tel} />
        <Paragraph classN="location-result__email" text={location.email} />
      </div>

    </div>
  )
}

const mapStateToProps = state => {
  return {
    id: state.searchs.id,
  }
};

export default connect(mapStateToProps)(LocationResult)