import React from 'react'
import { Title } from "../../../../components";
import NewsCard from '../NewsCard/NewsCard';
import './NewsAside.scss'
const item = {
  title: 'Hong Kong beach cleanup',
  text: 'Plastic Free Seas and DB Green welcome individuals to join us for this family -friendly cleanup.',
  date: '13 June 2020'
}

const myArray = [0, 1, 2, 3]

const NewsAside = () => {
  return (
    <div className="news">
      <div className="news--header">
        <Title tag="h2" text="News & Eventes" />
        <div className="news--filter">
          <span className="active">ALL</span> <span>NEWS</span> <span>EVENTS</span>
        </div>
      </div>
      <div className="news--body">
        {myArray.map(id => (
          <NewsCard key={id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default NewsAside
