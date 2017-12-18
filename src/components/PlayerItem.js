import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlayerItem extends Component {
  render() {
    const {player, players} = this.props;
    return (
      <div key={player.id} className="PlayerItem">
        <h4>{player.name}</h4>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, {})(PlayerItem);
