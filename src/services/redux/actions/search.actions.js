
import {
  SEARCH_LOCATIONS,
  SEARCH_GET_LOCATIONS,
  SEARCH_CLEAN_FILTER,
  SEARCH_CLEAN_LOCATIONS
} from './types';

export const getLocationFiltered = (filter) => {
  return { type: SEARCH_LOCATIONS, payload: { filter: filter } };
}

export const getLocations = (locations) => {
  return { type: SEARCH_GET_LOCATIONS, payload: { locations: locations } };
}

export const cleanFilter = () => {
  return { type: SEARCH_CLEAN_FILTER };
}

export const cleanLocations = () => {
  return { type: SEARCH_CLEAN_LOCATIONS };
}

export const cleanAndGetLocationFiltered = filter => dispatch => {
  dispatch(cleanLocations())
  dispatch(getLocationFiltered(filter))
}