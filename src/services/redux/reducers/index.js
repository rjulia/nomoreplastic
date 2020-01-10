import { combineReducers } from 'redux';
import SettingsReducer from './settings.reducer';



export default combineReducers({

  settings: SettingsReducer,

});