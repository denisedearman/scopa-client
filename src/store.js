import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import players from './reducers/playersReducer';
import playerFormData from './reducers/playerFormReducer';
import games from './reducers/gamesReducer';
import game from './reducers/currentGameReducer';
import gameFormData from './reducers/gameFormReducer';

const reducers = combineReducers({
    players,
    playerFormData,
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
