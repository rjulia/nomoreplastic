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

    // case SETTINGS_GET_LANGUAGE: {
    //   const lang = localization.getLanguage();
    //   return {
    //     ...state,
    //     language: lang
    //   };
    // }

    // case SETTINGS_SET_LANGUAGE: {
    //   localization.setLanguage(action.payload.language);
    //   localStorage.setItem('language', action.payload.language);
    //   return {
    //     ...state,
    //     language: action.payload.language
    //   };
    // }

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
      // const language = localStorage.getItem('language') || localization.getLanguage();
      // const supportedLanguage = () => {
      //   if ((language === 'en') || (language === 'zh')) {
      //     return language;
      //   }
      //   return 'en';
      // };
      // localization.setLanguage(supportedLanguage());
      return {
        ...state
        //language
      };
  }
}