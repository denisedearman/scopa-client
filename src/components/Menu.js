import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <div>
          <Link to={`/about`}>About</Link><br/>
          <Link to={`/players`}>See all the players</Link><br/>
          <Link to={`/games/new`}>Create a new game</Link><br/>
          <Link to={`/games`}>Select a matchup</Link><br/>
      </div>
    )
  }
}
