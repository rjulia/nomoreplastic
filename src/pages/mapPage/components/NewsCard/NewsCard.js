import React from 'react';
import { Title, Paragraph } from '../../../../components'
import Waste from '../../../../assets/images/beach-plastic.webp';
import './NewsCard.scss';
import moment from "moment";

const NewsCard = ({ item }) => {
  const { title, date, description, urlToImage, imageUrl, content__zh, content__en, url } = item
  return (
    <div className="newscard">
      <div className="news-card__image">
        <div className="news-card__frame">
          <img src={urlToImage ? urlToImage : imageUrl ? imageUrl : Waste} alt={title} />
        </div>
      </div>
      <div className="news-card__content">
        {date ? <Paragraph tag="span" text={moment(date).format('MM/DD/YY')} classN="news-card__date" /> : ''}
        <a href={url} target="_blank" rel="noopener noreferrer">
          <Title tag="h3" text={title} classN="news-card__title" />
        </a>
        <Paragraph tag="p" isTrucate={true} text={description || content__zh ||
          content__en} classN="news-card__text" />
      </div>
    </div>

  )
}

export default NewsCard
