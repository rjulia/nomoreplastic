import React from 'react'
import './advice.scss'
import { useParams, Link } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { Spinner, Title, Paragraph, BoxImage, ButtonBack } from "../../components";
import { ADVICE_QUERY } from "../../services/apollo/queries";
import moment from 'moment'
import variables from '../../scss/variables.scss';
import ProductContainer from './containers/ProductContainer'
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
        <div className="col-12 col-md-2 advice__box--images">
          <div className="advice__box--date">
            <div className="advice__group--date">

              <div className="advice__date--month">{month}</div>
              <div className="advice__date--day">{day}</div>
              <div className="advice__date--year">{year}</div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <Link to={"/advices"}>
            <ButtonBack text={"Go Back"} />
          </Link>
          <Title color={variables.primary} tag={"h2"} text={advice.title__en} size={40} sizeM={32} />
          <Paragraph classN={'advice__statement'} text={advice.statement__en} />
          <Paragraph classN={'advice__author'} text={`Author: ${advice.author}`} tag={'a'} href={advice.author} />
          <Title color={variables.primary} tag={"h2"} text={"Why do it?"} size={24} sizeM={30} />
          <div className="advice_pictures">
            <div className="advice__box--image">
              <BoxImage classN={'frame-image'} img={advice.imageUrl__no} height={200} />
              <Paragraph classN={'advice__image--author'} text={`Autho: ${advice.author__no}`} tag={'a'} href={advice.link__no} />
            </div>
            <div className="advice__box--image">

              <Paragraph classN={'advice__long-text'} text={advice.content__en.html} />
            </div>
          </div>
          <Title color={variables.primary} tag={"h2"} text={"What is the benefit?"} size={24} sizeM={30} />
          <div className="advice_pictures">
            <div className="advice__box--image">
              <BoxImage classN={'frame-image yes'} img={advice.imageUrl__yes} height={200} />
              <Paragraph classN={'advice__image--author'} text={`Autho: ${advice.author__yes}`} tag={'a'} href={advice.link__yes} />
            </div>
            <div className="advice__box--image">
              <Paragraph classN={'advice__long-text'} text={advice.content__en.html} />
            </div>
          </div>
          <Title color={variables.primary} tag={"h2"} text={"How can I do it?"} size={24} sizeM={30} />
          <Paragraph classN={'advice__long-text'} text={advice.content__en.html} />
          <Title color={variables.primary} tag={"h4"} text={"You can find this product clik in the link"} size={18} sizeM={18} />
          <ProductContainer ids={advice.products} />
        </div>
      </div>

    </div>
  )
}

export default AdvicePage
