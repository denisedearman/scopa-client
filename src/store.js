import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import players from './reducers/playersReducer';
import playerFormData from './reducers/playerFormReducer';
import games from './reducers/gamesReducer';
import game from './reducers/currentGameReducer';
import player from './reducers/currentPlayerReducer';
import gameFormData from './reducers/gameFormReducer';
import playerTurnFormData from './reducers/playerTurnFormReducer';

const reducers = combineReducers({
    player,
    players,
    playerFormData,
    playerTurnFormData,
    game,
    games,
    gameFormData
});


const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(...middleware)
);
