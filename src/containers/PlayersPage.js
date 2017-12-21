import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getPlayers } from '../actions/playerActions';
import PlayerItem from '../components/PlayerItem';

class PlayersPage extends Component {



  componentDidMount() {
    this.props.getPlayers()
  }




  render() {
    const {players, match} = this.props;

    return (
     <div>
     <Switch>
     <Route exact path={match.url}
      render={() =>
     <div className="PlayersList">
     <h1 className="playerName">Players</h1>
     {players.map(player => <PlayerItem key={player.id} player={player}/>)}
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
    players: state.players
  });
}

export default connect(mapStateToProps, { getPlayers })(PlayersPage);
