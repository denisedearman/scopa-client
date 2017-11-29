import React from 'react';
import { connect } from 'react-redux';

const PlayersShow = ({ player }) =>
  <div className="col-md-8">
    <h2>{player.name}</h2>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const player = state.players.find(player => player.id == ownProps.match.params.playerId)
  if (player) {
    return {player}
  }else{
    return {player: {}}
  }
};

export default connect(mapStateToProps)(PlayersShow);
