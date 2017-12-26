import React, { Component } from 'react';
import { connect } from 'react-redux';
import {likePlayer} from '../actions/playerActions';

class PlayerItem extends Component {

  handleLike = () => {
    this.props.likePlayer(this.props.player);
  }


  render() {
    const {player} = this.props;
    return (
      <div key={player.id} className="PlayerItem">
        <h4>{player.name}</h4>
        <h5>{player.like} likes</h5>
        <button key={player.id} onClick={this.handleLike}>Like</button>
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
