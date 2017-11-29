import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import PlayersShow from './containers/PlayersShow';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavLink style={{ marginRight: '10px' }} to="/players">See All The Players!</NavLink>
            <Switch>
              <Route exact path='/players' component={PlayersShow}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
