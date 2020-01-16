import {
  SEARCH_LOCATIONS
} from '../actions/types';


const InitialSettingsState = {
  search: {},
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
    default:
      return state;
  }
}