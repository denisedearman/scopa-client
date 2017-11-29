import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PlayersList extends Component {
  render() {
    const {player, players} = this.props;
    return (
      <Link style={{ marginRight: '12px' }} key={player.id} to={`/players/${player.id}`}>{player.name}</Link>
    )
  }
}

const mapStateToProps = state => {
  return {
    players: state.players
  }
}

export default connect(mapStateToProps, {})(PlayersList);
