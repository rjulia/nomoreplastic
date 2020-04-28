import React, { useState } from 'react';
import './advices.scss';
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph } from "../../components";
import CardAdvice from "./components/CardAdvice/CardAdvice";
import { ADVICES_QUERY } from "../../services/apollo/queries";
import { useTranslation } from 'react-i18next';
import variables from '../../scss/variables.scss';

const Advices = () => {

  const { t } = useTranslation();
  const { data, loading, error } = useQuery(ADVICES_QUERY);
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  return (
    <div className="advice__container">
      <div className="advice__title">
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
        {
          data.getAdvices.map(advice => (
            <div key={advice.id} className="column col-12 col-md-4">
              <CardAdvice advice={advice} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Advices