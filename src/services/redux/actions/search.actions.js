import { useQuery } from "@apollo/react-hooks";
import { LOCATIONS_QUERY } from "../../apollo/queries";
import {
  SEARCH_LOCATIONS,
  SEARCH_LOCATIONS_SUCCESS,
  SEARCH_LOCATIONS_FAILED
} from './types';

export const loadLocationsSuccess = (data) => {
  return { type: SEARCH_LOCATIONS_SUCCESS, payload: { data: data } };
}

export const loadLocationsFailed = (error) => {
  return { type: SEARCH_LOCATIONS_FAILED, payload: { error: error } };
}

export const searchLocations = () => {
  return { type: SEARCH_LOCATIONS };
}

export const searchAllLocations = query => dispatch => {
  const { data, loading, error } = useQuery(LOCATIONS_QUERY, query);
  if (error) return dispatch(loadLocationsFailed(error))
  if (loading) return dispatch(searchLocations())
  dispatch(loadLocationsSuccess(data))
};
