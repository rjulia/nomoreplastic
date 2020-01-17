import {
  SEARCH_LOCATIONS,
  GET_LOCATIONS,
  CLEAN_LOCATIONS
} from '../actions/types';


const InitialSettingsState = {
  search: {},
  locations: [],
  locationsLoading: false,
  isOnSearching: false,
  error: ''
};


export default function SearchReducers(state = InitialSettingsState, action) {
  switch (action.type) {
    case SEARCH_LOCATIONS:

      return {
        ...state,
        isOnSearching: true,
        search: action.payload.filter
      };
    case GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations
      }
    case CLEAN_LOCATIONS:
      return {
        ...state,
        isOnSearching: false,
        search: {}
      }
    default:
      return state;
  }
}