/* eslint-disable no-case-declarations */
/* global localStorage */
/* eslint no-undef: "error" */
import {
  SETTINGS_GET_LANGUAGE,
  SETTINGS_SET_LANGUAGE,
  SETTINGS_GET_POSITION,
} from "../actions/types";
import localization from '../../../localization';

const InitialSettingsState = {
  language: 'en',
  coords: {
    lat: 22.3693236,
    lng: 114.0405858

  }
};

export default function LanguageReducer(state = InitialSettingsState, action) {
  switch (action.type) {
    //case SETTINGS_SET_LANGUAGE: {
    //   const lang = localization.getLanguage();
    //   return { ...state, language: lang };
    // }

    // case SETTINGS_GET_LANGUAGE: {
    //   localization.setLanguage(action.payload.language);
    //   localStorage.setItem('language', action.payload.language);
    //   return {
    //     ...state,
    //     language: action.payload.language
    //   };
    // }

    case SETTINGS_GET_POSITION: {
      console.log(action.payload)
      return {
        ...state,
        coords: {
          lat: action.payload.coords.lat,
          lng: action.payload.coords.lng
        }
      }
    }

    default:
      const language = localStorage.getItem('language') || localization.getLanguage();
      const supportedLanguage = () => {
        if ((language === 'en') || (language === 'zh')) {
          return language;
        }
        return 'en';
      };
      localization.setLanguage(supportedLanguage());
      return { ...state, language };
  }
}