import React, { Component } from 'react';
import { connect } from 'react-redux';
import { likePlayer } from '../actions/playerActions';

class PlayerItem extends Component {

  handleOnClick = event => {
    this.props.likePlayer(this.props.player);
  }

  render() {
    const {player} = this.props;
    return (
      <div key={player.id} className="PlayerItem">
        <h4>{player.name}</h4>
        <button key={player.id} onClick={this.handleOnClick}>Like</button>
        <h2>{player.like}</h2>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, {likePlayer})(PlayerItem);
