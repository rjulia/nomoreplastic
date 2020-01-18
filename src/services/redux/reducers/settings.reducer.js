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
  language: localization.getLanguage(),
  coords: {
    lat: 0,
    lng: 0

  }
};

export default function LanguageReducer(state = InitialSettingsState, action) {
  switch (action.type) {
    case SETTINGS_GET_LANGUAGE: {
      const lang = localization.getLanguage();
      return {
        ...state,
        language: lang
      };
    }

    case SETTINGS_SET_LANGUAGE: {
      localization.setLanguage(action.payload.language);
      localStorage.setItem('language', action.payload.language);
      return {
        ...state,
        language: action.payload.language
      };
    }

    case SETTINGS_GET_POSITION: {
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
        if ((language === 'en') || (language === 'zht')) {
          return language;
        }
        return 'en';
      };
      localization.setLanguage(supportedLanguage());
      return {
        ...state,
        language
      };
  }
}