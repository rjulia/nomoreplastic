import {
  SEARCH_LOCATIONS,
  SEARCH_GET_LOCATIONS,
  SEARCH_CLEAN_FILTER,
  SEARCH_CLEAN_LOCATIONS
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
        search: {
          ...state.search,
          ...action.payload.filter
        }
      };
    case SEARCH_GET_LOCATIONS:
      return {
        ...state,
        locations: action.payload.locations
      }
    case SEARCH_CLEAN_FILTER:
      return {
        ...state,
        isOnSearching: false,
        search: {}
      }
    case SEARCH_CLEAN_LOCATIONS:
      return {
        ...state,
        locations: [],
      }
    default:
      return state;
  }
}