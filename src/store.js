import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import players from './reducers/playersReducer';
import playerFormData from './reducers/playerFormReducer';

const reducers = combineReducers({
    players,
    playerFormData
});


const middleware = [thunk];

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(...middleware)
);
