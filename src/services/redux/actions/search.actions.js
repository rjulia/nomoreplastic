
import {
  SEARCH_LOCATIONS,
  GET_LOCATIONS,
  CLEAN_LOCATIONS
} from './types';

export const loadLocationFiltered = (filter) => {
  return { type: SEARCH_LOCATIONS, payload: { filter: filter } };
}

export const getLocations = (locations) => {
  return { type: GET_LOCATIONS, payload: { locations: locations } };
}

export const cleanLocationFiltered = () => {
  return { type: CLEAN_LOCATIONS };
}


