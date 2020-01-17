import React, { useState, useEffect } from 'react'
import { Title, Spinner } from "../../../../components";
import NewsCard from '../NewsCard/NewsCard';
import './NewsAside.scss';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { EVENTS_QUERY, NEWS_QUERY } from "../../../../services/apollo/queries";


const WrapperNews = ({ news }) => {
  return news.length === 0 ? <Spinner /> : news.map((news, id) => (<NewsCard key={id} item={news} />))
}


const NewsAside = ({ getEvents, getNewsInfo }) => {

  let results = []
  let filterResults = []
  const [state, setState] = useState([]);
  if (getEvents.getEvents && getNewsInfo.getNewsInfo) {
    filterResults = results = getEvents.getEvents.concat(getNewsInfo.getNewsInfo);
  }

  useEffect(() => {
    setState(results)
  }, [getEvents.getEvents, getNewsInfo.getNewsInfo])

  const handleFilterNews = (filter) => {

    if (filter === 'EVENTS') {
      filterResults = results.filter(item => item.__typename === "Event")
      setState(filterResults)
    } else if (filter === 'NEWS') {
      filterResults = results.filter(item => item.__typename === "News")
      setState(filterResults)
    } else {
      setState(results)
    }
  }



  return (
    <div className="news">
      <div className="news__header">
        <Title tag="h2" text="News & Eventes" />
        <div className="news__filter">
          <span onClick={() => handleFilterNews()} className="active">ALL</span>
          <span onClick={() => handleFilterNews("NEWS")}>NEWS</span>
          <span onClick={() => handleFilterNews("EVENTS")}>EVENTS</span>
        </div>
      </div>
      <div className="news__body">
        <WrapperNews news={state} />
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

