import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Link, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import PlayersNew from './containers/PlayersNew';
import GamesNew from './containers/GamesNew';
import PlayersShow from './containers/PlayersShow';
import GameAbout from './containers/GameAbout';
import GameShow from './containers/GameShow';
import GameSummary from './containers/GameSummary';
import GameEdit from './containers/GameEdit';
import PlayersPage from './containers/PlayersPage';
import PlayerTurn from './containers/PlayerTurn';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Scopa</h1>
        <Router>
          <div>
          <Link to={`/about`}>About</Link><br/>
          <Link to={`/games/new`}>Create a new game</Link><br/>
          <Link to={`/games`}>Select a matchup</Link><br/>
            <Switch>
              <Route exact path='/players' component={PlayersPage}/>
              <Route path='/players/:playerId' component={PlayersShow}/>
              <Route exact path='/players/new' component={PlayersNew}/>
              <Route exact path='/about' component={GameAbout}/>
              <Route exact path='/games/new' component={GamesNew}/>
              <Route path='/games/:gameId/players/:playerId/edit' component={GameEdit}/>
              <Route path='/games/:gameId/players/:playerId' component={PlayerTurn}/>
              <Route path='/games/:gameId/summary' component={GameSummary}/>
              <Route path='/games/:gameId' component={GameShow}/>

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
