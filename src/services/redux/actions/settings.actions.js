import {
  SETTINGS_GET_LANGUAGE,
  SETTINGS_SET_LANGUAGE,
  SETTINGS_GET_POSITION
} from './types';

export function getLanguage() {
  return {
    type: SETTINGS_GET_LANGUAGE
  }
}

export function setLanguage(language) {
  return {
    payload: {
      language
    },
    type: SETTINGS_SET_LANGUAGE
  }
}

export function getPosition(coords) {
  return {
    payload: {
      coords
    },
    type: SETTINGS_GET_POSITION
  }
}