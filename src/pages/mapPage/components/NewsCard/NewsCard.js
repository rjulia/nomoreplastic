import React from 'react'
import { Title, Paragraph } from '../../../../components'
import Waste from '../../../../assets/images/beach-plastic.webp';
import './NewsCard.scss'

const NewsCard = ({ item }) => {

  const { title, date, text, img } = item
  return (
    <div className="newscard">
      <div className="news-card__image">
        <div className="news-card__frame">
          <img src={img ? img : Waste} alt="picture" />
        </div>
      </div>
      <div className="news-card__content">
        {date ? <Paragraph tag="span" text={date} classN="news-card__date" /> : ''}
        <Title tag="h3" text={title} classN="news-card__title" />
        <Paragraph tag="p" sort={true} text={text} classN="news-card__text" />
      </div>
    </div>

  )
}

export default NewsCard
