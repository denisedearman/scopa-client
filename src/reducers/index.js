import { combineReducers } from 'redux';
import petsReducer from './petsReducer';
import playersReducer from './playersReducer';
import playerFormReducer from './playerFormReducer';

export default combineReducers({
  players: playersReducer,
  playerFormData: playerFormReducer
});
