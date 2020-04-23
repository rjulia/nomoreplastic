import React from 'react'
import { Title, BoxImage, Label, Button } from '../../../../components'
import { withTranslation } from 'react-i18next';
import "./CardAdvice.scss";

const CardAdvice = ({ advice, i18n }) => {
  console.log(advice)
  console.log(i18n)
  const { language } = i18n
  return (
    <div className="card-advice__container">
      <div className="card-advice__header">
        <Title tag={'h2'} text={language === "en" ? advice.title__en : advice.title__zh} />
      </div>
      <div className="card-advice__content">
        <div className="card-advice__box--image">
          <BoxImage img={advice.imageUrl__yes} height={200} />
          <p className="card-advice__author"> Author: {advice.author__yes}</p>
        </div>
        <div className="card-advice__box--image no">
          <BoxImage img={advice.imageUrl__no} height={200} />
          <p className="card-advice__author">{advice.author__no}</p>
        </div>
        <div className="card-advice__box--text">
          <p className="card-advice__statement">{advice.statement__en}</p>
          <p>{advice.content__en}</p>


        </div>
      </div>
    </div>
  )
}

export default withTranslation()(CardAdvice)
