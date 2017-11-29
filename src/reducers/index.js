import { combineReducers } from 'redux';
import petsReducer from './petsReducer';
import playersReducer from './playersReducer';

export default combineReducers({
  players: playersReducer,
});
