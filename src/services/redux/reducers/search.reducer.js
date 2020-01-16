import {
  SEARCH_LOCATIONS,
  SEARCH_LOCATIONS_SUCCESS,
  SEARCH_LOCATIONS_FAILED
} from '../actions/types';


const InitialSettingsState = {
  locations: [],
  locationsLoading: false,
  searching: false,
  error: ''
};


export default function SearchReducers(state = InitialSettingsState, action) {
  switch (action.type) {
    case SEARCH_LOCATIONS_FAILED:
      return {
        ...state,
        error: action.payload.error
      };
    case SEARCH_LOCATIONS:

      return {
        ...state,
        locationsLoading: true
      };
    case SEARCH_LOCATIONS_SUCCESS:

      return {
        ...state,
        locationsLoading: false,
        locations: action.payload.data.getLocations,
      };
    default:
      return state;
  }
}