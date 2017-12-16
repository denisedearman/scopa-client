import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import PlayersNew from './containers/PlayersNew';
import GamesNew from './containers/GamesNew';
import PlayersShow from './containers/PlayersShow';
import GameShow from './containers/GameShow';
import PlayersPage from './containers/PlayersPage';
import PlayerTurn from './containers/PlayerTurn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path='/players' component={PlayersPage}/>
              <Route path='/players/:playerId' component={PlayersShow}/>
              <Route exact path='/players/new' component={PlayersNew}/>
              <Route exact path='/games/new' component={GamesNew}/>
              <Route path='/games/:gameId/players/:playerId' component={PlayerTurn}/>
              <Route path='/games/:gameId' component={GameShow}/>

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
