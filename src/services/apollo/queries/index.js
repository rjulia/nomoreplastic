import { gql } from 'apollo-boost';

// Locations
export const LOCATIONS_QUERY = gql`
  query getLocations($recycleBy: [TypeRecycling],$category: TypeLocationCategory, $district: TypeDistrict){
    getLocations(recycleBy: $recycleBy , category: $category, district: $district){
      id
      name
      lat
      lng
      category
      address
    }
  }
`;

export const LOCATION_QUERY = gql`
  query getLocation($id: ID) {
    getLocation (id: $id) {
      id
      name
      content__en
      content__zh
      address
      imageUrl
      webUrl
      lat
      lng
      tel
      opening
      facebook
      recycleBy
    }
}`


export const NEWS_QUERY = gql`
  query getNewsInfo {
    getNewsInfo {
    author
    title
    description
    publishedAt
    urlToImage
    url
    source {
        name
      }
    }
  }
`;

export const EVENTS_QUERY = gql`
  query getEvents{
    getEvents{
      id
      title
      date
      imageUrl
      category
      content__zh
      content__en
    }
  }
`;

export const EVENT_QUERY = gql`
  query getEvent($id: ID) {
    getEvent(id: $id) {
      id
      title
      place
      content__zh
      content__en
      date
      imageUrl
      webUrl
      lat
      lng
      date
      email
      category
      facebook
      recomendations
    }
}`