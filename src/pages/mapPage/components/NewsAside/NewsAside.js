import React from 'react'
import { Title, Spinner } from "../../../../components";
import NewsCard from '../NewsCard/NewsCard';
import './NewsAside.scss';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { EVENTS_QUERY, NEWS_QUERY } from "../../../../services/apollo/queries";


let results = []

const NewsAside = ({ getEvents, getNewsInfo }) => {

  if (getEvents.getEvents && getNewsInfo.getNewsInfo) {
    results = getEvents.getEvents.concat(getNewsInfo.getNewsInfo)
  }

  const showNews = (results.length == 0) ? <Spinner /> : results.map((news, id) => (
    <NewsCard key={id} item={news} />
  ))
  return (
    <div className="news">
      <div className="news--header">
        <Title tag="h2" text="News & Eventes" />
        <div className="news--filter">
          <span className="active">ALL</span> <span>NEWS</span> <span>EVENTS</span>
        </div>
      </div>
      <div className="news--body">
        {showNews}
      </div>
    </div>
  )
}

export default compose(
  graphql(EVENTS_QUERY, {
    name: "getEvents"
  }),
  graphql(NEWS_QUERY, {
    name: "getNewsInfo"
  }),
)(NewsAside);

