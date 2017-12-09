import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PlayerItem extends Component {
  render() {
    const {player, players} = this.props;
    return (
      <div key={player.id} className="PlayerItem">
        <Link style={{ marginRight: '12px' }} key={player.id} to={`/players/${player.id}`}>{player.name}</Link>
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
