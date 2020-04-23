import React from 'react'
import './advice.scss'
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph, BoxImage } from "../../components";
import { ADVICE_QUERY } from "../../services/apollo/queries";
import moment from 'moment'
import variables from '../../scss/variables.scss';

const AdvicePage = () => {
  let { id } = useParams();
  console.log(id)
  const { data, loading, error } = useQuery(ADVICE_QUERY, { variables: { id } });
  if (loading) return <Spinner className="spinner__map" />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  const advice = data.getAdvice
  const day = moment(advice.date).format("DD")
  const year = moment(advice.date).format("YYYY")
  const month = moment(advice.date).format("MMMM")



  return (
    <div className="advice__container">
      <div className="row">
        <div className="col-2 advice__box--images">
          <div className="advice__box--date">
            <div className="advice__group--date">

              <div className="advice__date--month">{month}</div>
              <div className="advice__date--day">{day}</div>
              <div className="advice__date--year">{year}</div>
            </div>
          </div>
        </div>
        <div className="col-10">
          <Title color={variables.primary} tag={"h2"} text={advice.title__en} size={40} />
          <Paragraph classN={'advice__statement'} text={advice.statement__en} />
          <div className="advice_pictures">
            <div className="advice__box--image">
              <BoxImage classN={'frame-image yes'} img={advice.imageUrl__yes} height={200} />
              <Paragraph classN={'advice__image--author'} text={`Autho: ${advice.author__yes}`} tag={'a'} href={advice.link__yes} />
            </div>
            <div className="advice__box--image">
              <BoxImage classN={'frame-image'} img={advice.imageUrl__no} height={200} />
              <Paragraph classN={'advice__image--author'} text={`Autho: ${advice.author__no}`} tag={'a'} href={advice.link__no} />
            </div>
          </div>
          <Paragraph classN={'advice__author'} text={`Author: ${advice.author}`} tag={'a'} href={advice.author} />
          <Paragraph classN={'advice__long-text'} text={advice.content__en.html} />
        </div>
      </div>

    </div>
  )
}

export default AdvicePage
