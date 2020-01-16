
import {
  SEARCH_LOCATIONS,

} from './types';

export const loadLocationFiltered = (filter) => {
  return { type: SEARCH_LOCATIONS, payload: { filter: filter } };
}

