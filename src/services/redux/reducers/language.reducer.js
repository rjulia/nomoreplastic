/* eslint-disable no-case-declarations */
/* global localStorage */
/* eslint no-undef: "error" */

import localization from '../../../localization';

const InitialLanguageState = {
  language: 'en'
};

export default function LanguageReducer(state = InitialLanguageState, action) {
  switch (action.type) {
    case 'settings/getLanguage': {
      const lang = localization.getLanguage();
      return { ...state, language: lang };
    }

    case 'settings/setLanguage': {
      localization.setLanguage(action.payload.language);
      localStorage.setItem('language', action.payload.language);
      return { language: action.payload.language };
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