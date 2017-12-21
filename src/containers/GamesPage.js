import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getGames } from '../actions/gameActions';
import GameItem from '../components/GameItem';

class GamesPage extends Component {

  componentDidMount() {
    this.props.getGames()
  }

  render() {
    const {games, match} = this.props;

    return (
     <div>
     <Switch>
     <Route exact path={match.url}
      render={() =>
     <div className="GamesList">
     <h1 className="GameName">Games</h1>
     {games.map(game => <GameItem key={game.id} game={game} />)}
     </div>
   }
   />
   </Switch>
    </div>
   )
  }
};

const mapStateToProps = state => {
  return ({
    games: state.games
  });
}

export default connect(mapStateToProps, { getGames })(GamesPage);
