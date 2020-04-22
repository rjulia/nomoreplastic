import React, { useState } from 'react';
import './advice.scss';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from "../../components";
import { ADVICES_QUERY } from "../../services/apollo/queries";
import { useTranslation } from 'react-i18next';
import variables from '../../scss/variables.scss';

const Advice = () => {

  const { t } = useTranslation();
  const { data, loading, error } = useQuery(ADVICES_QUERY);
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  return (
    <div className="shop__container">
      <div className="shop__title">
        <Title
          tag={'h1'}
          text={t('advice.title')}
          size={48}
          color={variables.primary}
        />
        <Paragraph
          tag='p'
          classN="contact__paragraph"
          text={t('advice.paraf')}
        />
      </div>
      <div className="row">

        <div className="row shop__row">
          {/* {
            data.getShops.map(shop => (
              <div key={shop.id} className="column">
                <CardShop shop={shop} open={(id) => onOpen(id)} />
              </div>
            ))
          } */}
        </div>
      </div>
    </div>
  )
}

export default Advice
