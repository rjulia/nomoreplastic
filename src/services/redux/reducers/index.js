import { combineReducers } from 'redux';
import LanguageReducer from './language.reducer.js';



export default combineReducers({

  settings: LanguageReducer,

});