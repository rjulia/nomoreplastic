import {
  SEARCH_LOCATIONS,
  CLEAN_LOCATIONS
} from '../actions/types';


const InitialSettingsState = {
  search: {},
  locationsLoading: false,
  isOnSearching: false,
  error: ''
};


export default function SearchReducers(state = InitialSettingsState, action) {
  switch (action.type) {
    case CLEAN_LOCATIONS:
      return {
        ...state,
        isOnSearching: false,
        search: {}
      }
    case SEARCH_LOCATIONS:

      return {
        ...state,
        isOnSearching: true,
        search: action.payload.filter
      };
    default:
      return state;
  }
}