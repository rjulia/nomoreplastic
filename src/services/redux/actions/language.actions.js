import {
  SETTINGS_GETLANGUAGE,
  SETTINGS_SETLANGUAGE
} from './types';

export function getLanguage() {
  return {
    type: SETTINGS_GETLANGUAGE
  }
}

export function setLanguage(language) {
  return {
    payload: {
      language
    },
    type: SETTINGS_SETLANGUAGE
  }
}