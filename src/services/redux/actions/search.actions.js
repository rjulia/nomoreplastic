
import {
  SEARCH_LOCATIONS,
  CLEAN_LOCATIONS
} from './types';

export const loadLocationFiltered = (filter) => {
  return { type: SEARCH_LOCATIONS, payload: { filter: filter } };
}

export const cleanLocationFiltered = () => {
  return { type: CLEAN_LOCATIONS };
}


