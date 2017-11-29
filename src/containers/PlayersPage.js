import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { getPlayers } from '../actions';
import PlayersNew from './PlayersNew';
import PlayersShow from './PlayersShow';
import PlayersList from '../components/PlayersList';

class PlayersPage extends Component {

  componentDidMount() {
    this.props.getPlayers();
  }

  render() {
    const{players} = this.props;

    return (
      <div>
        <PlayersList players={players}/>
        <Switch>
          <Route path={`/new`} component={PlayersNew} />
          <Route path={`/:playerId`} component={PlayersShow}/>
          <Route exact path={''} render={() => (
            <h3>Please select a Player from the list.</h3>
          )}/>
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
