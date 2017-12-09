import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import PlayersNew from './containers/PlayersNew';
import PlayersShow from './containers/PlayersShow';
import PlayersPage from './containers/PlayersPage';
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
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
