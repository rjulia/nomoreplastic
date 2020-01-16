import { gql } from 'apollo-boost';

// Locations
export const LOCATIONS_QUERY = gql`
  query getLocations($recycleBy: [TypeRecycling],$category: TypeLocationCategory, $district: TypeDistrict){
    getLocations(recycleBy: $recycleBy , category: $category, district: $district){
      id
      lat
      lng
      category
    }
  }
`;

export const LOCATION_QUERY = gql`
  query getLocation($id: ID) {
    getLocation (id: $id) {
      id
      name
      content
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