/* eslint-disable no-case-declarations */
/* global localStorage */
/* eslint no-undef: "error" */
import {
  SETTINGS_GET_LANGUAGE,
  SETTINGS_SET_LANGUAGE,
  SETTINGS_GET_POSITION,
  SETTINGS_TOGGLE_MENU,
  SETTINGS_CLEAN_POSITION
} from "../actions/types";

//import localization from '../../../localization';

const InitialSettingsState = {
  isOpenMenu: false,
  //language: localization.getLanguage(),
  coords: {
    lat: 22.3526632,
    lng: 113.987616,
    zoom: 11

  }
};

export default function LanguageReducer(state = InitialSettingsState, action) {
  switch (action.type) {

    case SETTINGS_CLEAN_POSITION: {
      return {
        ...state,
        coords: InitialSettingsState.coords
      };
    }
    case SETTINGS_TOGGLE_MENU: {
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu
      };
    }


    case SETTINGS_GET_POSITION: {
      return {
        ...state,
        coords: {
          lat: action.payload.coords.lat,
          lng: action.payload.coords.lng,
          zoom: action.payload.coords.zoom
        }
      }
    }

    default:
      return state
  }
}